// Education & Experience 版型

export const EduExpItem = ({ title, place, time, description }) => {
    return (
        <div className="mb-6 group lg:hover:-translate-y-1 transition-all duration-300 ease">
            <div className="font-medium whitespace-pre-line text-[16px] text-brand-text
            lg:group-hover:text-brand-primary transition-all duration-300 ease">
                {title}
            </div>
            <div className="flex justify-between font-medium text-[14px] text-brand-text/60
            lg:group-hover:text-brand-primary/60 transition-all duration-300 ease">
                <div>{place}</div>
                <div>{time}</div>
            </div>
            <ul className="list-disc pl-4 font-normal text-[14px] mt-2 text-brand-text
            lg:group-hover:text-brand-primary transition-all duration-300 ease">
                {description && description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};