// 每個專案個別頁面的版型 包含基本資訊 scope of work 詳細照片

import { projects } from "./AllProjects";

export const ProjectPages = ({ title, category, year, tools, introduction, cta, link, details, photos, explore }) => {

    const exploreProjects = explore ? explore.map((label) => projects.find((p) => p.label === label)).filter(Boolean) : [];

    return (
        <>
            <div className="w-full bg-brand-bg py-10 mt-[60px] flex justify-center items-start">

                <div className="flex flex-col lg:flex-row justify-between w-[90%] md:w-[85%] lg:w-[80%] items-start">

                    {/* left col */}
                    <div className="lg:sticky lg:top-[100px] w-full lg:w-[25%]">

                        <div className="flex flex-col w-full mb-6">


                            <div className="text-[22px] font-bold mb-6">
                                {title}
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-brand-graytext mb-2 text-[14px]">
                                    {"// "}Category
                                </div>
                                <div className="font-medium text-[16px]">
                                    {category}
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-brand-graytext mb-2 text-[14px]">
                                    {"// "}Year
                                </div>
                                <div className="font-medium text-[16px]">
                                    {year}
                                </div>
                            </div>

                            <div className="mb-7">
                                <div className="font-bold text-brand-graytext mb-2 text-[14px]">
                                    {"// "}Tools
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {tools.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full
                                                border border-brand-graytext/20 transition-all duration-300 ease lg:hover:-translate-y-[2px]
                                                lg:hover:bg-brand-primaryLight/20 lg:hover:text-brand-primary lg:hover:border-brand-primaryLight
                                                dark:lg:hover:bg-brand-primary/20 dark:lg:hover:text-brand-primaryLight dark:lg:hover:border-brand-primaryLight/70`}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-brand-graytext mb-2 text-[14px]">
                                    {"// "}Link
                                </div>
                                <a href={link} target={`${title === "Jo-Chuan's Portfolio" ? "_self" : "_blank"}`}
                                    className={`text-[16px] text-brand-primary font-semibold transition-all duration-300 ease
                                    relative inline-block group hover:text-brand-text

                                    after:content-['']
                                    after:absolute
                                    after:left-0
                                    after:bottom-0
                                    after:h-[2px]
                                    after:w-full
                                    after:bg-brand-primary
                
                                    after:scale-x-100
                                    after:origin-right

                                    after:transition-transform
                                    after:duration-300
                                    after:ease-out
                                    md:hover:after:scale-x-0`}>
                                    {cta}
                                    {title !== "Jo-Chuan's Portfolio" &&
                                        (<span className={`inline-block group-hover:translate-x-1 group-hover:-translate-y-1
                                        transition-all duration-300 ease`}>&#8599;</span>)}
                                </a>
                            </div>

                        </div>

                    </div>

                    {/* right col */}
                    <div className="w-full lg:w-[70%]">

                        {/* introduction, details */}
                        <div className="w-full flex flex-col">
                            <div className="text-justify text-[16px] mb-10 leading-8 font-normal">
                                {introduction}
                            </div>

                            <div className="text-justify mb-6">
                                <div className="text-brand-graytext font-bold text-[14px] mb-4">
                                    {"// "}Scope of Work
                                </div>
                                <ul className="list-disc ml-4 leading-8 text-[16px] font-normal">
                                    {details.map((item, index) => (
                                        <li key={index} className={`mb-4`}>
                                            <span className={`font-semibold`}>{item.subtitle}</span>
                                            {item.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* photos */}
                        <div className="w-full grid gap-8 mb-10">
                            {photos.map((src, index) => (
                                <div key={index} className="w-full rounded-md overflow-hidden">
                                    <img
                                        src={src}
                                        alt={`Project Photo ${index + 1}`}
                                        className="w-full"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* explore more */}

                        <div className="w-full">
                            <div className="text-brand-graytext font-bold text-[14px] mb-2">
                                Explore More Projects...
                            </div>

                            <ul>
                                {exploreProjects.map((projects) => (
                                    <li key={projects.href} className={`mb-2`}>
                                        <a href={projects.href} className={`relative inline-block group text-brand-primary hover:text-brand-text
                                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                                        after:w-full after:bg-brand-primary after:scale-x-100 after:origin-right
                                        after:transition-transform duration-300 ease-out md:hover:after:scale-x-0`}>

                                            <span className="font-bold text-[16px]">{projects.title}</span>
                                            <span className="font-normal text-[14px]">（{projects.category}）</span>
                                            <span className="inline-block text-[20px] ml-1 lg:group-hover:translate-x-2 transition-transform duration-300 ease">
                                                &#8594;
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>


            </div >
        </>
    );
};