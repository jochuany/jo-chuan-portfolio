import Image from "next/image";

export default function Period() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            月來悅貼心
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                網頁前端
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2024
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                HTML / CSS / JavaScript
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              團體專案。內含整合月經知識問答、經期情緒安撫的機器人，以及政大周邊月經地圖的手機網頁。主要負責網頁前端串聯，將介面設計轉化為可用的手機網頁，亦協助將機器人與地圖串進網頁中。
            </div>
            <a href="https://youtu.be/ts6eESkYaKE?si=Gyy9lJ73vd44rRV_" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              Demo on YouTube &#x2197;
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6">
            <img src="/images/period/period-01.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
