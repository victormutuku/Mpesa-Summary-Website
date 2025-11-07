import Link from "next/link";

export default function HeaderLinks({active = ""}) {
    return (
        <div className="absolute top-8 left-10 right-10 flex justify-between">
            <Link href={'/'} className={`hover:underline ${active === "home" && "underline"}`}>Home</Link>
            <div className="flex gap-5">
            <Link href={'/changelog'} className={`hover:underline ${active === "changelog" && "underline"}`}>ChangeLog</Link>
            <Link href={'/privacy'} className={`hover:underline ${active === "privacy" && "underline"}`}>Privacy</Link>
            </div>
        </div>
    )
}
