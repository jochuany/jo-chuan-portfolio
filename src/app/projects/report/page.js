import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "薪租翹翹板",
  category: "專題網站",
  year: "2023",
  tools: "HTML / CSS / Web Scraper / Flourish",
  introduction: "此專案是為傳播科系新鮮人打造的專題網站，內容整合臺灣人口最多的臺北市、新北市、臺中市與高雄市之傳播產業薪資、房屋租金與各類消費資料，旨在透過數據分析釐清生活各面向的概況並做比較，供社會新鮮人獲取所需資訊，降低對未來﻿的迷惘。",
  cta: "Visit Website \u2197",
  link: "https://jochuany.github.io/112.nccucomm.big-data-analysis.4/html/index.html",
  details: [
    {
      subtitle: "「薪資篇」資料蒐集、數據分析與內容撰寫：",
      description: "使用 Web Scraper 插件工具爬下薪資資料，將數據分析結果製作成圖表，最後撰寫成一篇完整的報導。"
    },
    {
      subtitle: "介面設計與技術實作之間的溝通：",
      description: "團隊中只有我了解網頁技術，因此負責網站架設的同時，我也以開發邏輯的角度，與團隊成員討論想呈現的介面或效果是否能達成。"
    },
    {
      subtitle: "整個專題網站的切版與上線：",
      description: "整合所有文章、圖片與圖表，根據團隊成員規劃的介面，使用 HTML 與 CSS 撰寫成靜態網頁（含電腦版、手機版 RWD），並上線於 Github Pages。"
    }
  ],
  photos: [
    "/images/report/report-01.png",
    "/images/report/report-02.png",
    "/images/report/report-03.png",
    "/images/report/report-04.png",
    "/images/report/report-05.png",
    "/images/report/report-06.png"
  ]
}

export default function Report() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
