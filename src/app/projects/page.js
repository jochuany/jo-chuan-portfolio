import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%]">

          <div className="hidden md:flex w-full pb-1 justify-between items-start border-b">
            <div className="md:w-[30%] text-[14px] font-medium">PROJECT NAME</div>
            <div className="md:w-[30%] text-[14px] font-medium">TYPE</div>
            <div className="md:w-[30%] text-[14px] font-medium">YEAR</div>
          </div>

          <a href="/projects/chance" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">CHANCE!!</div>
              <div className="md:w-[30%] text-[16px] font-medium">產品規劃</div>
              <div className="md:w-[30%] text-[16px] font-medium">2025</div>
            </div>
          </a>

          <a href="/projects/spike" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">SPIKE IT UP!!</div>
              <div className="md:w-[30%] text-[16px] font-medium">網頁遊戲</div>
              <div className="md:w-[30%] text-[16px] font-medium">2025</div>
            </div>
          </a>

          <a href="/projects/period" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">月來悅貼心</div>
              <div className="md:w-[30%] text-[16px] font-medium">網頁前端</div>
              <div className="md:w-[30%] text-[16px] font-medium">2024</div>
            </div>
          </a>

          <a href="/projects/report" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">薪租翹翹板</div>
              <div className="md:w-[30%] text-[16px] font-medium">專題網站</div>
              <div className="md:w-[30%] text-[16px] font-medium">2023</div>
            </div>
          </a>

          <a href="/projects/mirror" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">鏡像之境</div>
              <div className="md:w-[30%] text-[16px] font-medium">互動體驗</div>
              <div className="md:w-[30%] text-[16px] font-medium">2023</div>
            </div>
          </a>

          <a href="/projects/cross" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">麥側過馬路</div>
              <div className="md:w-[30%] text-[16px] font-medium">3D 遊戲</div>
              <div className="md:w-[30%] text-[16px] font-medium">2023</div>
            </div>
          </a>

          <a href="/projects/tennis" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">球后的崛起</div>
              <div className="md:w-[30%] text-[16px] font-medium">資訊動畫</div>
              <div className="md:w-[30%] text-[16px] font-medium">2022</div>
            </div>
          </a>

          <a href="/projects/boat" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">〈船〉歌詞 MV</div>
              <div className="md:w-[30%] text-[16px] font-medium">動畫</div>
              <div className="md:w-[30%] text-[16px] font-medium">2022</div>
            </div>
          </a>

          <a href="/projects/fruit" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">水果指南</div>
              <div className="md:w-[30%] text-[16px] font-medium">Logo 設計</div>
              <div className="md:w-[30%] text-[16px] font-medium">2022</div>
            </div>
          </a>

          <a href="/projects/typhoon" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">颱風假到底怎麼放？</div>
              <div className="md:w-[30%] text-[16px] font-medium">資訊圖表／資訊動畫</div>
              <div className="md:w-[30%] text-[16px] font-medium">2022</div>
            </div>
          </a>

          <a href="/projects/vnccu" className="border-b md:border-none hover:bg-brand-text hover:text-brand-bg group transition-all duration-300 ease">
            <div className="w-full pt-4 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center group-hover:pl-6 transition-all duration-300 ease">
              <div className="md:w-[30%] text-[20px] font-bold mb-2 md:mb-0">政大之聲開播週</div>
              <div className="md:w-[30%] text-[16px] font-medium">主視覺設計</div>
              <div className="md:w-[30%] text-[16px] font-medium">2021</div>
            </div>
          </a>

        </div>

      </div>
    </>
  );
}
