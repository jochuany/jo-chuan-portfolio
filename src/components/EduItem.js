// Education & Experience 版型

"use client";


export const EduItem = ({ title, place, time }) => {

    return (
        <div className={`transition-all duration-300 ease group px-4 py-3 rounded-md group mb-4 lg:hover:-translate-y-1 
       lg:hover:bg-brand-primaryLight/20 bg-brand-graybg/60 border border-brand-graybg/60`}>
            <div className="flex flex-col items-start text-start">
                <div className={`font-medium whitespace-pre-line text-[16px] text-brand-text
                    lg:group-hover:text-brand-primary transition-all duration-300 ease`}>
                    {title}
                </div>
                <div className={`flex justify-between font-medium text-[14px] text-brand-text/60
                    lg:group-hover:text-brand-primaryLight transition-all duration-300 ease`}>
                    <div>{place}｜{time}</div>
                </div>
            </div>
        </div >
    );
};