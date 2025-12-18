export const ProjectItem = ({ href, title, category, year, isLast }) => {
    return (
        <a href={href} className={`${!isLast ? "border-b" : "border-none"} md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease`}>
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
                <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">{title}</div>
                <div className="md:w-[30%] text-[16px] font-medium">{category}</div>
                <div className="md:w-[30%] text-[16px] font-medium">{year}</div>
            </div>
        </a>
    );
};