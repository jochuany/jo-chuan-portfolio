"use client";

import { useState } from "react";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center items-center w-screen h-[100px] text-[#1a2690] bg-[#f2efdf] font-bold">
            <div className="flex w-[90%] justify-between items-center">

                <a href="/"><div className="flex justify-start text-[20px]">J. C.</div></a>

                {/* ham menu */}
                <div onClick={toggleMenu} className="md:hidden z-50 relative cursor-pointer">
                    <img src={`${isOpen ? "/images/nav-close.png" : "/images/nav-open.png"}`} className="w-[24px]" />
                </div>

                {/* pc menu */}
                <div className="hidden md:flex md:text-[20px]">
                    <a href="/about"><div className="ml-6">About</div></a>
                    <a href="/projects"><div className="ml-6">Projects</div></a>
                    <a href="/contact"><div className="ml-6">Contact</div></a>
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