"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const pathname = usePathname();

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="flex justify-center items-center w-screen h-[80px] text-[#1a2690] bg-[#f2efdf] font-bold border-b">
            <div className="flex w-[90%] justify-between items-center">

                <a href="/" className="md:w-[30%]"><div className="flex justify-start text-[18px]">J. C.</div></a>

                {/* ham menu */}
                <div onClick={toggleMenu} className="md:hidden z-50 relative cursor-pointer">
                    <img src={`${isOpen ? "/images/nav-close.png" : "/images/nav-open.png"}`} className="w-[24px] transition-all duration-300 ease" />
                </div>

                {/* pc menu */}
                <div className="w-[30%] flex justify-between">

                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`transition-all duration-300 text-[#1a2690] cursor-pointer hover:translate-y-1
                                ${isActive ? "font-black" : "font-light"}`}
                            >
                                {link.name}
                            </a>
                        )
                    })}

                </div>



            </div>

            {/* ham menu content */}
            <div className={`fixed inset-0 bg-[#f2efdf] z-40 flex flex-col justify-center items-center
            transition-transform duration-300 ease ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <div className="text-[20px] font-bold flex flex-col gap-8 items-center">
                    <a href="/about"><div onClick={toggleMenu}>About</div></a>
                    <a href="/projects"><div onClick={toggleMenu}>Projects</div></a>
                    <a href="/contact"><div onClick={toggleMenu}>Contact</div></a>
                </div>
            </div>

        </div>
    );
}