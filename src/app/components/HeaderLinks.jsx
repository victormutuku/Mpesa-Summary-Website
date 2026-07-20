import Image from "next/image";
import Link from "next/link";

export default function HeaderLinks({ active = "" }) {
    return (
        <div className="absolute top-6 left-7 right-10 flex justify-between items-center text-magnolia-950">
            <div className="flex gap-2 items-center">
                <Image src={"/images/simplified-icon.svg"} width={40} height={40} alt="App Icon" />
                <Link href={'/'} className="font-semibold text-2xl">SpendAnalysis</Link>
            </div>
            <div className="flex gap-5">
                <Link href={'/legal/terms-and-conditions'} className={`hover:underline ${active === "terms" && "underline"}`}>Terms & Conditions</Link>
                <Link href={'/legal/privacy'} className={`hover:underline ${active === "privacy" && "underline"}`}>Privacy</Link>
            </div>
        </div>
    )
}
