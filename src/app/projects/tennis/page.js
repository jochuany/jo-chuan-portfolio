import Image from "next/image";

export default function Tennis() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            球后的崛起
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
                2022
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Adobe Illustrator / Adobe After Effects
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              個人專案，以自己喜歡的職業球員為題材，製作約一分半的資訊動畫，介紹其球風、成就等。由個人獨立完成腳本、繪製素材、動態化、配音配樂、剪輯，在企劃階段即著重場景間的轉換，電視、網球、快門、報紙，皆為搭配敘事轉場的關鍵物件，使整體畫面銜接更流暢。
            </div>
            <a href="https://youtu.be/y2TkF0Tm3JY?si=bADOPmTrxx7FX2uD" target="_blank"
              className="text-[16px] text-[#f2efdf] text-center mb-6 py-2 md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/tennis/tennis-01.png" className="w-full" />
            <img src="/images/tennis/tennis-02.png" className="w-full" />
            <img src="/images/tennis/tennis-03.png" className="w-full" />
            <img src="/images/tennis/tennis-04.png" className="w-full" />
            <img src="/images/tennis/tennis-05.png" className="w-full" />
            <img src="/images/tennis/tennis-06.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
