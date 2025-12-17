import Image from "next/image";

export default function Fruit() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            水果指南
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                Logo 設計
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2022
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Adobe Illustrator
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[12px] md:text-[14px] mb-6 leading-6">
              團體專案。以水果為題策劃一社群品牌，主要受眾為政大學生，品牌名「指南」為學校路名、介紹意義雙關，分享與生活相關的水果小知識。主要參與品牌規劃，並負責 Logo 設計，結合「水果」與「指南」之意象，以橘黃色為主色調，營造活潑的形象。
            </div>
            <a href="https://www.instagram.com/zhinanfruit.co/" target="_blank"
              className="text-[12px] text-[#f2efdf] text-center mb-6 py-2 md:text-[14px] md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/fruit/fruit-01.png" className="w-full" />
            <img src="/images/fruit/fruit-02.png" className="w-full" />
            <img src="/images/fruit/fruit-03.png" className="w-full" />
            <img src="/images/fruit/fruit-04.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
