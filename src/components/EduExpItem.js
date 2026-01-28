// Education & Experience 版型

export const EduExpItem = ({ title, place, time, description }) => {
    return (
        <div className="mb-6 lg:hover:text-brand-primary transition-all duration-300 ease">
            <div className="font-medium">{title}</div>
            <div className="flex justify-between font-normal">
                <div>{place}</div>
                <div>{time}</div>
            </div>
            <ul className="list-disc pl-4 text-[14px] mt-2">
                {description && description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};