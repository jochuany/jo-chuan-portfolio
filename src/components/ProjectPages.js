
export const ProjectPages = ({ title, category, year, tools, introduction, cta, link, details, photos }) => {
    return (
        <>
            <div className="w-full bg-brand-bg py-10 mt-[60px] flex justify-center items-start">

                <div className="flex flex-col md:flex-row justify-between w-[90%] md:w-[85%] lg:w-[80%] items-start">

                    <div className="md:sticky md:top-[100px] w-full md:w-[20%]">

                        <div className="flex flex-col w-full mb-6">


                            <div className="text-[22px] font-bold mb-6">
                                {title}
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-brand-graytext mb-2 text-[14px]">
                                    {"// "}Type
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
                                            className={`text-[14px] font-medium px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full
                                            transition-all duration-300 ease md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
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
                                <a href={link} target="_blank"
                                    className={`text-[16px] text-brand-primary font-semibold transition-all duration-300 ease
                                    relative inline-block

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
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className="w-full md:w-[75%]">
                        <div className="w-full flex flex-col">
                            <div className="text-justify text-[16px] mb-10 leading-8 font-normal">
                                {introduction}
                            </div>

                            <div className="text-justify mb-10">
                                <div className="text-brand-graytext font-bold text-[14px]">{"// "}What I do</div>
                                <ul className="my-4 list-disc ml-4 leading-8 text-[16px] font-normal">
                                    {details.map((item, index) => (
                                        <li key={index} className={`mb-4`}><span className={`font-semibold`}>{item.subtitle}</span>{item.description}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full grid gap-8">
                            {photos.map((src, index) => (
                                <div key={index} className="w-full">
                                    <img
                                        src={src}
                                        alt={`Project Photo ${index + 1}`}
                                        className="w-full"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                </div>


            </div>
        </>
    );
};