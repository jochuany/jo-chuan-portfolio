"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Shuffle from "@/components/Shuffle"

export default function NavBar() {

    const [isHamOpen, setIsHamOpen] = useState(false);

    const toggleMenu = () => {
        setIsHamOpen(!isHamOpen);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("ruochuanyang@gmail.com");
        alert("ruochuanyang@gmail.com\n\nEmail copied!");
    };

    const pathname = usePathname();

    const navLinks = [
        { name: "PROJECT", href: "/projects" },
        { name: "ABOUT", href: "/about" },
    ];

    return (
        <>
            <div className="flex justify-center items-center w-screen h-[60px] text-brand-text bg-brand-bg/50 font-bold backdrop-blur-sm fixed top-0 left-0 z-50">

                <div className="flex w-[90%] md:w-[85%] lg:w-[80%] justify-between items-center">

                    {/* home button */}
                    <a href="/" className="pt-0.5 flex justify-start items-center text-[16px] text-brand-primary">
                        <Shuffle
                            className="text-[16px] transition-all duration-300 cursor-pointer font-black hover:opacity-60"
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

                    {/* right buttons */}
                    <div className="flex">

                        <div className="flex justify-center items-center">

                            {/* pc menu buttons */}
                            <div className="hidden md:flex md:items-center">

                                {navLinks.map((link) => {
                                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                                    return (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className={`text-[16px] transition-all duration-300 ml-4
                                        hover:text-brand-text relative inline-block
                                        
                                        after:content-['']
                                        after:absolute
                                        after:left-0
                                        after:bottom-0
                                        after:h-[2px]
                                        after:w-full
                                        after:bg-brand-text
                
                                        after:scale-x-0
                                        after:origin-left
                
                                        after:transition-transform
                                        after:duration-300
                                        after:ease-out

                                        md:hover:after:scale-x-100

                                    ${isActive ? "before:content-['•'] before:mr-1 text-brand-primary" : "text-brand-graytext"}`}
                                        >
                                            {link.name}
                                        </a>
                                    )
                                })}

                            </div>

                            {/* email icon */}
                            <div onClick={copyEmail} className="cursor-pointer ml-4 hover:opacity-70 transition-opacity text-brand-primary"
                                aria-label="Contact">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5l7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" /></svg>
                                {/* <!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --> */}
                            </div>


                        </div>

                        {/* ham menu icon */}
                        <div onClick={toggleMenu} className="md:hidden z-50 relative cursor-pointer ml-4 h-[20px] w-[20px] flex flex-col justify-center gap-[8px]">
                            <span className={`h-0.5 w-full bg-brand-text transition-all duration-300 ease ${isHamOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
                            <span className={`h-0.5 w-full bg-brand-text transition-all duration-300 ease ${isHamOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
                        </div>

                    </div>


                </div>

                {/* ham menu content */}
                <div className={`fixed inset-0 bg-brand-bg z-40 flex w-full h-screen justify-center items-center
                transition-transform duration-300 ease ${isHamOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                    <div className="text-[20px] font-bold flex flex-col gap-8 items-center">
                        <a href="/"><div onClick={toggleMenu}>Home</div></a>
                        <a href="/projects"><div onClick={toggleMenu}>Projects</div></a>
                        <a href="/about"><div onClick={toggleMenu}>About</div></a>
                    </div>
                </div>

            </div>
        </>
    );
}