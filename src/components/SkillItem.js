// Skills 版型

export const SkillItem = ({ title, tools }) => {
    return (
        <div className="mb-6">
            <div className="text-brand-text font-medium leading-8">{title}</div>
            <div className="flex flex-wrap gap-2 mt-2">
                {tools.map((item, index) => (
                    <div
                        key={index}
                        className={`text-[14px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                    >
                        {item}
                    </div>))}
            </div>
        </div>
    );
};