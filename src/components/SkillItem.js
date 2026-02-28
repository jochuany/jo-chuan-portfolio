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
                    <div key={index} className={`skill-hover-effect-group`}>
                        {item}
                    </div>))}
            </div>
        </div>
    );
};