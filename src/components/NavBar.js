"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Shuffle from "@/components/Shuffle"

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const pathname = usePathname();

    const navLinks = [
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="flex justify-center items-center w-screen h-[80px] text-brand-text bg-brand-bg font-bold border-b sticky top-0 z-50">
            <div className="flex w-[90%] justify-between items-center">

                <a href="/" className="md:w-[30%]">
                    <Shuffle
                        className="flex justify-start text-[16px] transition-all duration-300 cursor-pointer font-black"
                        text="JO CHUAN"
                        shuffleDirection="right"
                        duration={0.5}
                        animationMode="evenodd"
                        shuffleTimes={1}
                        ease="power3.out"
                        stagger={0.03}
                        threshold={0.1}
                        triggerOnce={true}
                        triggerOnHover={true}
                        respectReducedMotion={true}
                        loop={true}
                        loopDelay={2}
                    />
                </a>

                {/* <a href="/" className="md:w-[30%]"><div className="flex justify-start text-[18px] transition-all duration-300 cursor-pointer hover:translate-y-1">J. C.</div></a> */}

                {/* ham menu */}
                <div onClick={toggleMenu} className="md:hidden z-50 relative cursor-pointer">
                    <img src={`${isOpen ? "/images/nav-close.png" : "/images/nav-open.png"}`} className="w-[24px] transition-all duration-300 ease" />
                </div>

                {/* pc menu */}
                <div className="hidden w-[30%] md:flex justify-between">

                    {navLinks.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-[16px] transition-all duration-300 cursor-pointer hover:translate-y-1
                                ${isActive ? "font-black" : "font-light"}`}
                            >
                                {link.name}
                            </a>
                        )
                    })}

                </div>



            </div>

            {/* ham menu content */}
            <div className={`fixed inset-0 bg-brand-bg z-40 flex flex-col justify-center items-center
            transition-transform duration-300 ease ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <div className="text-[20px] font-bold flex flex-col gap-8 items-center">
                    <a href="/projects"><div onClick={toggleMenu}>Projects</div></a>
                    <a href="/about"><div onClick={toggleMenu}>About</div></a>
                    <a href="/contact"><div onClick={toggleMenu}>Contact</div></a>
                </div>
            </div>

        </div>
    );
}