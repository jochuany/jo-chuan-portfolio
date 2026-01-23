
export const ProjectItem = ({ href, title, category, year, photo, tool }) => {
    return (

        <a href={href} className="md:border-none transition-all duration-300 ease group">
            <div className="flex flex-col justify-between items-start transition-all duration-300 ease">
                <div className="h-[200px] w-full mb-2 overflow-hidden relative group">
                    <div style={{ backgroundImage: `url(${photo})` }} className="h-full w-full
                bg-cover bg-center bg-no-repeat transition-all duration-500 ease group-hover:scale-110"></div>
                </div>
                <div className="text-[20px] transition-all duration-300 ease font-bold mb-2">{title}</div>
                <div className="text-[16px] transition-all duration-300 ease font-medium mb-2">{category}／{year}</div>
                <div className="flex flex-wrap gap-2">
                    {tool && tool.length > 0 && tool.map((item, index) => (
                        <div
                            key={index}
                            className="text-[12px] font-medium border border-brand-text px-2 py-0.5 rounded-full"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </a>
    );
};