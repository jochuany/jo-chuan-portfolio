
export const ProjectPages = ({ title, category, year, tools, introduction, cta, link, details, photos }) => {
    return (
        <>
            <div className="w-full bg-brand-bg my-[60px] flex justify-center">

                <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%]">


                    <div className="text-[24px] font-bold mb-6 md:text-[26px]">
                        {title}
                    </div>

                    <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

                        <div className="mb-4 md:w-[30%]">
                            <div className="font-medium">
                                TYPE
                            </div>
                            <div className="font-bold">
                                {category}
                            </div>
                        </div>

                        <div className="mb-4 md:w-[30%]">
                            <div className="font-medium">
                                YEAR
                            </div>
                            <div className="font-bold">
                                {year}
                            </div>
                        </div>

                        <div className="mb-4 md:w-[30%]">
                            <div className="font-medium">
                                TOOL
                            </div>
                            <div className="font-bold">
                                {tools}
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex flex-col">
                        <div className="text-justify text-[16px] mb-6 leading-8">
                            {introduction}
                        </div>
                        <a href={link} target="_blank"
                            className={`inline-block text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
                            bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease`}>
                            {cta}
                        </a>
                        <div className="text-justify text-[16px] mb-10 leading-8">
                            <p>在此專案中，我完成了</p>
                            <ul className="my-4 list-disc ml-4">
                                {details.map((item, index) => (
                                    <li key={index} className="mb-4"><strong>{item.subtitle}</strong>{item.description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
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
        </>
    );
};