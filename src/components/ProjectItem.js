// 每個專案的預覽版型 photo title category year tools

export const ProjectItem = ({ href, title, category, year, photo, tools }) => {
    return (

        <a href={href} className={`transition-all duration-300 ease bg-brand-graybg/60 rounded-md overflow-hidden group
        border border-transparent lg:hover:-translate-y-1 lg:hover:border-brand-primaryLight lg:hover:bg-brand-primaryLight/20`}>
            <div className="flex flex-col justify-between items-start transition-all duration-300 ease">
                <div className={`h-[160px] md:h-[180px] lg:h-[200px] w-full overflow-hidden
                    relative transition-all ease duration-300`}>
                    <div style={{ backgroundImage: `url(${photo})` }} className={`h-full w-full lg:grayscale-70
                    bg-cover bg-center bg-no-repeat transition-all duration-500 ease lg:group-hover:scale-110 lg:group-hover:grayscale-0`}></div>
                </div>
                <div className="flex flex-col px-5 py-4">
                    <div className={`text-[16px] text-brand-text transition-all duration-300 ease font-bold mb-2
                    lg:group-hover:text-brand-primary`}>
                        {title}
                    </div>
                    <div className={`text-[14px] text-brand-text/60 transition-all duration-300 ease font-normal mb-3
                        lg:group-hover:text-brand-primaryLight`}>
                        {category}{"｜"}{year}
                    </div>
                    <div className={`flex flex-wrap gap-2`}>
                        {tools?.slice(0, 3).map((item, index) => (
                            <div key={index} className="skill-hover-effect-group">
                                {item}
                            </div>
                        ))}
                        {tools?.length > 3 && (
                            <span className={`text-[12px] text-brand-text self-center
                            transition-all duration-300 ease-in-out lg:group-hover:text-brand-primary`}>
                                +{tools.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
};