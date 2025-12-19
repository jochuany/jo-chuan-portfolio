export const AwdItem = ({ title, award, description }) => {
    return (
        <div className="mb-6">
            <div className="w-full font-bold text-[18px] leading-10 text-justify">
                {title}
            </div>
            <div className="w-full font-normal text-[18px] leading-10 text-justify">
                {award}
            </div>
            <ul className="w-full font-normal text-[16px] leading-8 text-justify list-disc pl-4 mt-2">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};