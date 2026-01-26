
export const ProjectItem = ({ href, title, category, year, photo, tool }) => {
    return (

        <a href={href} className="md:border-none transition-all duration-300 ease group">
            <div className="flex flex-col justify-between items-start transition-all duration-300 ease">
                <div className="h-[160px] md:h-[180px] lg:h-[200px] w-full mb-2 overflow-hidden relative group">
                    <div style={{ backgroundImage: `url(${photo})` }} className="h-full w-full md:grayscale
                bg-cover bg-center bg-no-repeat transition-all duration-500 ease md:group-hover:scale-110 md:group-hover:grayscale-0"></div>
                </div>
                <div className="text-[18px] transition-all duration-300 ease font-bold mb-3
                md:group-hover:text-brand-primary relative inline-block

                after:content-[''] 
                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-full
                after:bg-brand-primary
                
                after:scale-x-0
                after:origin-left

                after:transition-transform
                after:duration-300
                after:ease-out

                md:group-hover:after:scale-x-100

                ">
                    {title}
                </div>
                <div className="text-[16px] transition-all duration-300 ease font-normal mb-3 md:group-hover:text-brand-primary">
                    {category}／{year}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    {tool && tool.length > 0 && tool.map((item, index) => (
                        <div
                            key={index}
                            className="text-[14px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:group-hover:bg-brand-primaryLight md:group-hover:text-brand-bg"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};