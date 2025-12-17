import Image from "next/image";

export default function Chance() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            CHANCE!!
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

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
            <div className="md:w-[65%] text-justify text-[12px] md:text-[14px] mb-6 leading-6">
              個人專案，獨立完成產品規劃與 UI 設計。以身為排球球友的日常經驗出發，設計一款整合臨打與季打報名、比賽與課程資訊、新聞與場館訊息的排球 APP。
            </div>
            <a href="https://www.figma.com/design/o1C7w9sgoiAI7chbrAgcRF/Chance--?node-id=163-2&t=8p5JB3rs4YGvMrdl-1"
              className="text-[12px] text-[#f2efdf] text-center mb-6 py-2 md:text-[14px] md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full flex flex-col gap-12 md:flex-row md:flex-wrap md:justify-between">
            <img src="/images/chance/chance-01.png" className="w-full" />
            <img src="/images/chance/chance-02.png" className="w-full md:w-[30%]" />
            <img src="/images/chance/chance-03.png" className="w-full md:w-[30%]" />
            <img src="/images/chance/chance-04.png" className="w-full md:w-[30%]" />
            <img src="/images/chance/chance-05.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
