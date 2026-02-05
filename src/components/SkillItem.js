// Skills 版型

export const SkillItem = ({ title, skillDescription, tools }) => {
    return (
        <div className="mb-8 group lg:hover:-translate-y-1 transition-all duration-300 ease">
            <div className="text-[16px] text-brand-text font-medium leading-8
            lg:group-hover:text-brand-primary transition-all ease duration-300">{`${title}`}</div>
            <div className="text-[14px] text-brand-text font-normal leading-7 text-justify mb-2
            lg:group-hover:text-brand-primary/60 transition-all ease duration-300">{skillDescription}</div>
            <div className="flex flex-wrap gap-2 mt-2">
                {tools.map((item, index) => (
                    <div
                        key={index}
                        className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full
                            border border-brand-graytext/20 transition-all duration-300 ease
                            lg:group-hover:bg-brand-primaryLight/20 lg:group-hover:text-brand-primary lg:group-hover:border-brand-primaryLight
                            dark:lg:group-hover:bg-brand-primary/20 dark:lg:group-hover:text-brand-primaryLight dark:lg:group-hover:border-brand-primaryLight/70`}
                    >
                        {item}
                    </div>))}
            </div>
        </div>
    );
};