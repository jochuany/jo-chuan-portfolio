import Image from "next/image";

export default function Report() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            薪租翹翹板
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                專題網站
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
                HTML / CSS
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[14px] mb-6 leading-6">
              團隊合作專案，參與部分資料分析、內容撰寫，另負責網頁切版與架設。此專案是我自學網頁前端的第一個切版實作，雖只使用純 HTML 與 CSS，但為後續學習框架打下基礎。
            </div>
            <a href="https://jochuany.github.io/112.nccucomm.big-data-analysis.4/html/index.html" target="_blank"
              className="text-[14px] text-[#f2efdf] text-center mb-6 py-2 md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/report/report-01.png" className="w-full" />
            <img src="/images/report/report-02.png" className="w-full" />
            <img src="/images/report/report-03.png" className="w-full" />
            <img src="/images/report/report-04.png" className="w-full" />
            <img src="/images/report/report-05.png" className="w-full" />
            <img src="/images/report/report-06.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
