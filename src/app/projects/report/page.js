import Image from "next/image";

export default function Report() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            薪租翹翹板
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

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
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              此專案是為傳播科系新鮮人打造的專題網站，內容整合臺灣人口最多的臺北市、新北市、臺中市與高雄市之傳播產業薪資、房屋租金與各類消費資料，
              旨在透過數據分析釐清生活各面向的概況並做比較，供社會新鮮人獲取所需資訊，降低對未來﻿的迷惘。
            </div>
            <a href="https://jochuany.github.io/112.nccucomm.big-data-analysis.4/html/index.html" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              Visit Website &#x2197;
            </a>
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              在此團隊合作專案中，我完成了<br />
              <ul className="list-disc pl-4">
                <li><strong>「薪資篇」資料蒐集、數據分析與內容撰寫：</strong>使用 Web Scraper 插件工具爬下薪資資料，將數據分析結果製作成圖表，最後撰寫成一篇完整的報導。</li>
                <li><strong>介面設計與技術實作之間的溝通：</strong>團隊中只有我了解網頁技術，因此負責網站架設的同時，我也以開發邏輯的角度，與團隊成員討論想呈現的介面或效果是否能達成。</li>
                <li><strong>整個專題網站的切版與上線：</strong>整合所有文章、圖片與圖表，根據團隊成員規劃的介面，使用 HTML 與 CSS 撰寫成靜態網頁（含電腦版、手機版 RWD），並上線於 Github Pages。</li>
              </ul>
            </div>
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
