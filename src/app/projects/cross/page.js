import Image from "next/image";

export default function Cross() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            麥側過馬路
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                3D 遊戲
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2023 (2025 v2)
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Unity C#
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[12px] md:text-[14px] mb-6 leading-6">
              團隊合作專案，此遊戲以「天天過馬路」作為原型，將場景改為政大周邊，並且以劇情呈現，融入政大學生的生活。我們希望遊戲帶來娛樂的同時，也能喚起政大學生及附近居民對此地交通安全的重視。<br /><br />
              負責主要程式撰寫（人物操作 + 關卡串聯）與場景特效（下雨、冒煙、光線等）。在此專案中我亦擔任組長，協助整合美術組與程式組、掌握專案進度。另於 2025 年更新遊玩時的指引介面。
            </div>
            <a href="https://rjyang.itch.io/cross-the-zhinan-road-v2" target="_blank"
              className="text-[12px] text-[#f2efdf] text-center mb-6 py-2 md:text-[14px] md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/cross/cross-01.png" className="w-full" />
            <img src="/images/cross/cross-02.png" className="w-full" />
            <img src="/images/cross/cross-03.png" className="w-full" />
            <img src="/images/cross/cross-04.png" className="w-full" />
            <img src="/images/cross/cross-05.png" className="w-full" />
            <img src="/images/cross/cross-06.png" className="w-full" />
            <img src="/images/cross/cross-07.png" className="w-full" />
            <img src="/images/cross/cross-09.png" className="w-full" />
            <img src="/images/cross/cross-08.png" className="w-full" />
            <img src="/images/cross/cross-10.png" className="w-full" />
            <img src="/images/cross/cross-11.png" className="w-full" />
            <img src="/images/cross/cross-12.png" className="w-full" />
            <img src="/images/cross/cross-13.png" className="w-full" />
            <img src="/images/cross/cross-14.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
