"use client"

import { Menu } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeaderLinks({ active = "" }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="absolute top-6 left-7 right-10 flex justify-between items-center text-magnolia-950">
            <div tabIndex={1} onClick={() => setOpenMenu(!openMenu)} className="relative cursor-pointer sm:hidden">
                <Menu />
                {openMenu && <div onClick={() => setOpenMenu(false)} className="absolute rounded-md shadow-md w-45 flex flex-col items-center bg-white">
                    <Link href={'/legal/terms-and-conditions'} className={`${active === "terms" && "bg-magnolia-100"} w-full py-2 text-center border-b bg-magnolia-50/50 hover:bg-magnolia-50`}>Terms & Conditions</Link>
                    <Link href={'/legal/privacy'} className={`${active === "privacy" && "bg-magnolia-100"} w-full py-2 text-center bg-magnolia-50/50 hover:bg-magnolia-50`}>Privacy</Link>
                </div>}
            </div>
            <div className="flex gap-2 items-center">
                <Image src={"/images/simplified-icon.svg"} width={40} height={40} alt="App Icon" />
                <Link href={'/'} className="font-semibold text-2xl">SpendAnalysis</Link>
            </div>
            <div></div>
            <div className="sm:flex gap-5 hidden">
                <Link href={'/legal/terms-and-conditions'} className={`hover:underline ${active === "terms" && "underline"}`}>Terms & Conditions</Link>
                <Link href={'/legal/privacy'} className={`hover:underline ${active === "privacy" && "underline"}`}>Privacy</Link>
            </div>
        </div>
    )
}
