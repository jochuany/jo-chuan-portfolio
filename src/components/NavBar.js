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
        <>
            <div className="flex justify-center items-center w-screen h-[60px] text-brand-text bg-brand-bg/50 font-bold backdrop-blur-sm fixed top-0 left-0 z-50">
                <div className="flex w-[90%] md:w-[85%] lg:w-[80%] justify-between items-center">

                    <a href="/" className="pt-0.5 md:w-[30%] flex justify-start items-center text-[16px] text-brand-primary">
                        <Shuffle
                            className="text-[16px] transition-all duration-300 cursor-pointer font-black"
                            text="JO CHUAN."
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

                    {/* ham menu */}
                    <div onClick={toggleMenu} className="md:hidden z-50 relative cursor-pointer h-[20px] w-[20px] flex flex-col justify-center gap-[8px]">
                        {/* <img src={`${isOpen ? "/images/nav-close.png" : "/images/nav-open.png"}`} className="w-[24px] transition-all duration-300 ease" /> */}
                        <span className={`h-0.5 w-full bg-brand-text transition-all duration-300 ease ${isOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                        {/* <span className={`h-0.5 w-full bg-brand-text transition-all duration-300 ease ${isOpen ? "opacity-0" : ""}`} /> */}
                        <span className={`h-0.5 w-full bg-brand-text transition-all duration-300 ease ${isOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
                        {/* <div>{isOpen ? "Close" : "Menu"}</div> */}
                    </div>

                    {/* pc menu */}
                    <div className="hidden md:w-[40%] lg:w-[30%] md:flex justify-between">

                        {navLinks.map((link) => {
                            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`text-[16px] transition-all duration-300 cursor-pointer hover:underline hover:underline-offset-2
                                    ${isActive ? "underline underline-offset-2 text-brand-primary" : ""}`}
                                >
                                    {link.name}
                                </a>
                            )
                        })}

                    </div>



                </div>

                {/* ham menu content */}
                <div className={`fixed inset-0 bg-brand-bg z-40 flex w-full h-screen justify-center items-center
            transition-transform duration-300 ease ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                    <div className="text-[20px] font-bold flex flex-col gap-8 items-center">
                        <a href="/"><div onClick={toggleMenu}>Home</div></a>
                        <a href="/projects"><div onClick={toggleMenu}>Projects</div></a>
                        <a href="/about"><div onClick={toggleMenu}>About</div></a>
                        <a href="/contact"><div onClick={toggleMenu}>Contact</div></a>
                    </div>
                </div>

            </div>
        </>
    );
}