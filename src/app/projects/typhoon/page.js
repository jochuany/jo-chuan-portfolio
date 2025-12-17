import Image from "next/image";

export default function Typhoon() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            颱風假到底怎麼放？
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                資訊圖表／資訊動畫
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
                PowerPoint / Excel
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              個人專案，綜合有關颱風假標準、實施方式解釋、過往案例、以及政治影響的資訊視覺化動畫。主要負責腳本協作、圖表美化與資訊動畫製作，將抽象的數據、難懂的法案以簡單直覺的形式呈現。
            </div>
            <a href="https://youtu.be/8sklFG5qRm0?si=DLpqVpQBirhhybVk" target="_blank"
              className="text-[16px] text-[#f2efdf] text-center mb-6 py-2 md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/typhoon/typhoon-01.png" className="w-full" />
            <img src="/images/typhoon/typhoon-02.png" className="w-full" />
            <img src="/images/typhoon/typhoon-03.png" className="w-full" />
            <img src="/images/typhoon/typhoon-04.png" className="w-full" />
            <img src="/images/typhoon/typhoon-05.png" className="w-full" />
            <img src="/images/typhoon/typhoon-06.png" className="w-full" />
            <img src="/images/typhoon/typhoon-07.png" className="w-full" />
            <img src="/images/typhoon/typhoon-08.png" className="w-full" />
            <img src="/images/typhoon/typhoon-09.png" className="w-full" />
            <img src="/images/typhoon/typhoon-10.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
