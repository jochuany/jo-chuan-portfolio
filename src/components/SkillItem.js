// Skills 版型

export const SkillItem = ({ title, tools }) => {
    return (
        <div className="mb-6 group">
            <div className="text-brand-text font-medium leading-8 lg:group-hover:text-brand-primary transition-all ease duration-300">{title}</div>
            <div className="flex flex-wrap gap-2 mt-2">
                {tools.map((item, index) => (
                    <div
                        key={index}
                        className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full
                            border border-brand-graytext/20 transition-all duration-300 ease lg:group-hover:-translate-y-[2px]
                            lg:group-hover:bg-brand-primaryLight/20 lg:group-hover:text-brand-primary lg:group-hover:border-brand-primaryLight
                            dark:lg:group-hover:bg-brand-primary/20 dark:lg:group-hover:text-brand-primaryLight dark:lg:group-hover:border-brand-primaryLight/70`}
                    >
                        {item}
                    </div>))}
            </div>
        </div>
    );
};