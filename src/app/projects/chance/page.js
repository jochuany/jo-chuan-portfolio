import Image from "next/image";

export default function Chance() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            CHANCE!!
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                產品規劃
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2025
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Figma
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              個人專案，獨立完成產品規劃與 UI 設計。以身為排球球友的日常經驗出發，有感於臨打與比賽資訊繁雜、缺少資訊整合的現況，設計出一款整合臨打與季打報名、比賽與課程資訊、新聞與場館訊息的排球 APP。<br /><br />
              視覺設計使用大眾普遍熟悉的排球配色——黃、藍為主，營造陽光、具有活力的形象。
            </div>
            <a href="https://www.figma.com/design/o1C7w9sgoiAI7chbrAgcRF/Chance--?node-id=163-2&t=8p5JB3rs4YGvMrdl-1" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              View on Figma &#x2197;
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/chance/chance-01.png" className="w-full" />
            <img src="/images/chance/chance-02.png" className="w-full" />
            <img src="/images/chance/chance-03.png" className="w-full" />
            <img src="/images/chance/chance-04.png" className="w-full" />
            <img src="/images/chance/chance-05.png" className="w-full" />
            <img src="/images/chance/chance-06.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
