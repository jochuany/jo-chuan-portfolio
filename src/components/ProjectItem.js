// 每個專案的預覽版型 photo title category year tools

export const ProjectItem = ({ href, title, category, year, photo, tools }) => {
    return (

        <a href={href} className="transition-all duration-300 ease group">
            <div className="flex flex-col justify-between items-start transition-all duration-300 ease">
                <div className="h-[160px] md:h-[180px] lg:h-[200px] w-full mb-2 overflow-hidden relative group">
                    <div style={{ backgroundImage: `url(${photo})` }} className={`h-full w-full lg:grayscale
                bg-cover bg-center bg-no-repeat transition-all duration-500 ease group-hover:scale-110 lg:group-hover:grayscale-0`}></div>
                </div>
                <div className={`text-[18px] transition-all duration-300 ease font-bold mb-2
                lg:group-hover:text-brand-primary`}>
                    {title}
                </div>
                <div className={`text-[16px] transition-all duration-300 ease font-normal mb-2 lg:group-hover:text-brand-primary`}>
                    {category}{"／"}{year}
                </div>
                <div className={`flex flex-wrap gap-2 mb-3`}>
                    {tools && tools.length > 0 && tools.map((item, index) => (
                        <div
                            key={index}
                            className={`text-[14px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            lg:group-hover:bg-brand-primaryLight lg:group-hover:text-brand-bg`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};