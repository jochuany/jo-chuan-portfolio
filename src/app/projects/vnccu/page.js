import Image from "next/image";

export default function Vnccu() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            政大之聲開播週
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                主視覺設計
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2021
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
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              大學時期於政大之聲實習電台為活動設計的主視覺，以繽紛、明亮風格呈現，象徵電台節目的多元性。由個人獨立完成所有圖像的繪製與設計，包括 Facebook 大頭貼、宣傳 Banner、以及實體海報。
            </div>
            <a href="https://www.facebook.com/share/p/1L6hnGVNay/" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/vnccu/vnccu-01.jpg" className="w-full md:col-span-2" />
            <img src="/images/vnccu/vnccu-02.jpg" className="w-full md:col-span-2" />
            <img src="/images/vnccu/vnccu-03.jpg" className="w-full md:col-span-1" />
            <img src="/images/vnccu/vnccu-04.jpg" className="w-full md:col-span-1" />
            <img src="/images/vnccu/vnccu-05.jpg" className="w-full md:col-span-1" />
            <img src="/images/vnccu/vnccu-06.jpg" className="w-full md:col-span-1" />
            <img src="/images/vnccu/vnccu-07.jpg" className="w-full md:col-span-1" />
          </div>

        </div>

      </div>
    </>
  );
}
