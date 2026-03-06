// Skills 版型

"use client";

import { useState } from "react";


export const SkillItem = ({ title, skillDescription, tools }) => {

    const [isOpen, SetIsOpen] = useState(false);

    return (
        <div className={`w-full px-4 py-3 rounded-md flex flex-col mb-4 group
            ${isOpen ? "bg-brand-primaryLight/20 border border-brand-primaryLight" : "bg-brand-graybg/60 border border-transparent"}
            lg:hover:-translate-y-1 lg:hover:bg-brand-primaryLight/20 transition-all duration-300 ease`}>

            <button className={`flex justify-between items-center text-[16px] font-medium leading-8 cursor-pointer
             transition-all ease duration-300`} onClick={() => SetIsOpen(!isOpen)}>
                <div className={`lg:group-hover:text-brand-primary ${isOpen ? "text-brand-primary" : "text-brand-text"}
                transition-all duration-300 ease`}>
                    {title}
                </div>
                <div className="relative flex h-5 w-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                        className={`lg:group-hover:text-brand-primary
                        ${isOpen ? 'rotate-180 text-brand-primary' : 'rotate-0 text-brand-text'} transition-all duration-300 ease-in-out`}>
                        <path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062" />
                    </svg>
                    {/* <!-- Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE --> */}
                </div>
            </button>

            <div className={`${isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'}
            transition-all ease duration-300`}>
                <div className={`text-[14px] text-brand-text font-normal leading-7 text-justify mb-4 transition-all ease duration-300`}>
                    {skillDescription}
                </div>
                <div className="flex flex-wrap gap-2 my-2">
                    {tools.map((item, index) => (
                        <div key={index} className={`skill-hover-effect`}>
                            {item}
                        </div>))}
                </div>
            </div>

        </div>
    );
};