"use client";
export default function Footers() {

    const copyEmail = () => {
        navigator.clipboard.writeText("ruochuanyang@gmail.com");
        alert("ruochuanyang@gmail.com\n\nEmail copied!");
    };

    return (
        <div className="flex justify-center items-center w-screen h-[60px] text-brand-graytext bg-brand-bg">

            <div className="flex flex-col md:flex-row w-[90%] md:w-[85%] lg:w-[80%] justify-center items-center text-[12px] md:text-[14px] font-medium">

                <a onClick={copyEmail}
                    className={`font-bold md:hover:text-brand-text transition-all duration-300 tracking-wide
                        relative inline-block link-underline-effect-nav`}
                >
                    ruochuanyang@gmail.com
                </a>

                <div className="flex">
                    <div className="mx-2 hidden md:flex">{" // "}</div>© {new Date().getFullYear()} Jo-Chuan Yang. Built with Next.js
                </div>

            </div>

        </div>
    )
}