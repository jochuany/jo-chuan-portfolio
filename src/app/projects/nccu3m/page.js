import Image from "next/image";

export default function Nccu3m() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            NCCU in Under 3 Minutes
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                資訊動畫
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2023
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                After Effects
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              合作專案，為政大製作的英文簡介資訊動畫。視覺以簡潔的文字、icon 為主，讓觀眾能在聆聽聲音旁白的同時掌握關鍵資訊。
            </div>
            <a href="https://youtu.be/nZVRC3BNZkk?si=-q0SE2d1uTnZu0sS" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              Watch on YouTube &#x2197;
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/nccu3m/nccu3m-01.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-02.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-03.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-04.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-05.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-06.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-07.png" className="w-full" />
            <img src="/images/nccu3m/nccu3m-08.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
