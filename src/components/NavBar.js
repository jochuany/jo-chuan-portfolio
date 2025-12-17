"use client";

import { useState } from "react";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex justify-center items-center w-screen h-[80px] text-[#1a2690] bg-[#f2efdf] font-bold border-b">
            <div className="flex w-[90%] justify-between items-center">

                <a href="/" className="md:w-[30%]"><div className="flex justify-start text-[18px]">J. C.</div></a>

                {/* ham menu */}
                <div onClick={toggleMenu} className="md:hidden z-50 relative cursor-pointer">
                    <img src={`${isOpen ? "/images/nav-close.png" : "/images/nav-open.png"}`} className="w-[24px] transition-all duration-300 ease" />
                </div>

                {/* pc menu */}
                <div className="hidden md:flex md:text-[18px] md:justify-between md:w-[30%]">
                    <a href="/about"><div className="">About</div></a>
                    <a href="/projects"><div className="">Projects</div></a>
                    <a href="/contact"><div className="">Contact</div></a>
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