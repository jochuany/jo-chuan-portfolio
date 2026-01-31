// 每個專案的預覽版型 photo title category year tools

export const ProjectItem = ({ href, title, category, year, photo, tools }) => {
    return (

        <a href={href} className="transition-all duration-300 ease group">
            <div className="flex flex-col justify-between items-start lg:group-hover:-translate-y-1 transition-all duration-300 ease">
                <div className="h-[160px] md:h-[180px] lg:h-[200px] w-full mb-2 rounded-md border border-brand-graytext
                lg:group-hover:border-brand-primary overflow-hidden relative transition-all ease duration-300">
                    <div style={{ backgroundImage: `url(${photo})` }} className={`h-full w-full lg:grayscale
                    bg-cover bg-center bg-no-repeat transition-all duration-500 ease lg:group-hover:scale-110 lg:group-hover:grayscale-0`}></div>
                </div>
                <div className={`text-[16px] transition-all duration-300 ease font-bold mb-2
                lg:group-hover:text-brand-primary`}>
                    {title}
                </div>
                <div className={`text-[14px] transition-all duration-300 ease font-normal mb-2 lg:group-hover:text-brand-primary`}>
                    {category}{"｜"}{year}
                </div>
                <div className={`flex flex-wrap gap-2 mb-3`}>
                    {tools && tools.length > 0 && tools.map((item, index) => (
                        <div
                            key={index}
                            className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full border border-brand-graytext/20
                                transition-all duration-300 ease
                            lg:group-hover:bg-brand-primaryLight/20 lg:group-hover:text-brand-primary lg:group-hover:border-brand-primaryLight
                            dark:lg:group-hover:bg-brand-primary/20 dark:lg:group-hover:text-brand-primaryLight dark:lg:group-hover:border-brand-primaryLight/70`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};