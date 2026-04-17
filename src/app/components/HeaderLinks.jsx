import Link from "next/link";

export default function HeaderLinks({ active = "" }) {
    return (
        <div className="absolute top-8 left-10 right-10 flex justify-between">
            <div className="flex gap-5">
                <Link href={'/'} className={`hover:underline ${active === "home" && "underline"}`}>Home</Link>
                <Link href={'/changelog'} className={`hover:underline ${active === "changelog" && "underline"}`}>ChangeLog</Link>
            </div>
            <div className="flex gap-5">
                <Link href={'/legal/terms-and-conditions'} className={`hover:underline ${active === "terms" && "underline"}`}>Terms and Conditions</Link>
                <Link href={'/legal/privacy'} className={`hover:underline ${active === "privacy" && "underline"}`}>Privacy</Link>
            </div>
        </div>
    )
}
