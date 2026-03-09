// Education & Experience 版型

"use client";

import { useState } from "react";


export const ExpItem = ({ title, place, time, description, logo }) => {

    const [isOpen, SetIsOpen] = useState(false);


    return (
        <div className={`flex flex-col items-between transition-all duration-300 ease px-4 py-3 rounded-md group mb-4
            ${isOpen ? "bg-brand-primaryLight/20 border border-brand-primaryLight" : "bg-brand-graybg/60 border border-transparent"}
            lg:hover:-translate-y-1 lg:hover:bg-brand-primaryLight/20`}>

            <button className={`flex justify-between items-center z-10`}
                onClick={() => SetIsOpen(!isOpen)}>
                <div className="flex justify-start items-center">
                    <div
                        style={{ backgroundImage: `url(${logo})` }}
                        className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] bg-contain bg-center bg-no-repeat mr-4 shrink-0">

                    </div>
                    <div className="flex flex-col items-start text-start">
                        <div className={`font-medium whitespace-pre-line text-[16px]
                    ${isOpen ? "text-brand-primary" : "text-brand-text"}
                    lg:group-hover:text-brand-primary transition-all duration-300 ease`}>
                            {title}
                        </div>
                        <div className={`flex justify-between font-medium text-[14px] 
                    ${isOpen ? "text-brand-primaryLight" : "text-brand-text/60"}
                    lg:group-hover:text-brand-primaryLight transition-all duration-300 ease`}>
                            <div>{place}｜{time}</div>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-5 w-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                        className={`lg:group-hover:text-brand-primary transition-all duration-300 ease-in-out
                        ${isOpen ? 'rotate-180 text-brand-primaryLight' : 'rotate-0 text-brand-text'}`}>
                        <path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062" />
                    </svg>
                    {/* <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --> */}
                </div>
            </button>

            <ul className={`list-disc pl-4 font-normal text-[14px] text-brand-text
            transition-all duration-300 ease
            ${isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                {description && description.map((item, index) => (
                    <li className="mb-2 text-justify" key={index}>{item}</li>
                ))}
            </ul>

        </div >
    );
};