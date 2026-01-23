"use client";
import Image from "next/image";
import { EduItem } from "@/components/EduItem";
import { ExpItem } from "@/components/ExpItem";
import { useState } from "react";

const edu = [
  {
    title: "傳播碩士學位學程（M.A.）",
    college: "國立政治大學｜SEP. 2023 - DEC. 2025",
    description: [
      "學術方面專注於媒體心理研究，閱讀許多互動科技、虛擬實境、人機互動相關文獻，了解使用者體驗虛擬實境的心理歷程。",
      "碩士論文獨自執行實驗法，拍攝與剪輯 360 度之全景影片作為實驗刺激物，共招募 80 位以上參與者。",
      "實作方面則曾修習網路內容產品規劃、人工智慧應用等課程，持續累積專案作品。"
    ]
  },
  {
    title: <>廣告學系 傳播設計組（B.A.）<br /> 數位內容與科技學士學位學程（B.S.）</>,
    college: "國立政治大學｜SEP. 2018 - JUN. 2023",
    description: [
      "主修傳播設計，在學期間完成許多視覺設計、資訊動畫之專案，累積製作數位敘事的能力。",
      "大三至大五雙主修數位內容學程，開始接觸程式語言、Unity，亦與團隊合作完成遊戲作品。"
    ]
  },
];

const exp = [
  {
    title: "研究助理",
    place: "TLab 媒體心理實驗室｜FEB. 2024 - OCT. 2025",
    description: [
      "協助社會科學、媒體心理實驗法之研究進行，與助理群合作接待超過百位受試者，擁有 VR 頭顯操作經驗。",
      "協助沉浸科技、虛擬實境社交等主題之文獻搜集整理。",
      "文化科技計畫：協助搜集國內外沉浸文化科技案例，整合為臺灣文化科技產業地圖。",
      "數位信任計畫：協助訪談資料整理、文獻探討、撰寫報告。"
    ]
  },
  {
    title: "實習助理",
    place: "政大之聲廣播電台｜SEP. 2019 - JUN. 2022",
    description: [
      "廣播節目製作：合作完成節目企劃、採訪、主持、剪輯、現場播出。",
      "新聞資訊編輯：編輯國內外重要新聞稿，並於整點 Live 播報；帶領助理檢討專題稿件。",
      "深度專題產製：合作擬訂專題企劃、採訪、撰寫、過音，完成 2000 字以上之深度專題報導。",
      "視覺設計協助：參與開播活動視覺設計（含實體海報、線上社群）、帶狀節目視覺設計、節目主視覺設計。"
    ]
  },
];


export default function About() {

  const [activeTab, setActiveTab] = useState("about");

  const tabContents = {
    about: "1999 年生，畢業於國立政治大學廣告系／數位內容學程／傳播研究所。\n擁有設計、程式、研究的跨領域背景，對科技有興趣，懂得利用網路資源與 AI 科技自學新技術。\n\n個性認真、負責、在乎細節，能將作品反覆調整到最好。\n樂於學習和挑戰新事物，擅長獨立作業、也喜歡團隊合作，能快速適應新環境與不同節奏的工作方式。",
    skills: "我擁有資訊動畫與視覺設計的專案經驗，善於設計流暢的腳本來說好一個故事。曾參與遊戲製作專案，並從自學 HTML / CSS 到掌握 Tailwind CSS / Next.js 等前端技術，能進行網頁切版與開發。碩士期間對 XR 科技產生興趣，專注於媒體心理學研究，撰寫碩士論文的過程中訓練了定義與驗證問題的能力、清晰有邏輯的寫作能力，亦擁有操作 XR 設備、拍攝與剪輯 360 影片的經驗。\n\n此外，修習網路內容產品規劃的課程，讓我培養從 0 開始定義數位產品的思維：從專案描述、目標設定開始，實際進行使用者調查與訪談，訂定受眾、產品需求與 Flowchart，並進一步製作 Wireframe 與 Prototype。",
    future: "回顧過去做設計、寫程式到做研究的經歷，其實都指向同一目標——「創造更好的數位體驗」。製作數位敘事能更有效地向受眾傳達議題、學習前端語言讓我能從開發的角度去思考數位設計的可行性、研讀媒體心理學理論與設計的心理學也幫助我更了解使用者的心理歷程。\n\n我希望成為一名 UI 設計師／使用者體驗設計師，相較於純設計或純工程背景的工作者，我的優勢在於能擔任設計與開發之間的橋樑，我熟悉前端語言與設計規範，能在設計時考量技術實作的可行性，減少溝通落差。期待未來能發揮所長，與不同領域的夥伴合作，共同優化大眾與數位世界的互動體驗。"
  };


  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">

          <div className="flex md:hidden font-bold mb-6 text-[16px]">
            ▌ABOUT ME
          </div>

          <div className="w-full mb-10 md:w-[65%] pb-4 border-b border-brand-text md:border-0">
            {/* name intro */}
            <div className="font-bold text-[20px] mb-6">
              楊若絹（Yang, Jo-Chuan）
            </div>

            <div className="grid grid-cols-3">
              <div
                className={`px-4 py-2 text-center transition-all duration-400 cursor-pointer border border-brand-text ${activeTab === 'about' ? "bg-brand-text text-brand-bg" : "bg-brand-bg text-brand-text"}`}
                onClick={() => setActiveTab('about')}
              >
                關於我
              </div>
              <div
                className={`px-4 py-2 text-center transition-all duration-400 cursor-pointer border-y border-brand-text ${activeTab === 'skills' ? "bg-brand-text text-brand-bg" : "bg-brand-bg text-brand-text"}`}
                onClick={() => setActiveTab('skills')}
              >
                技能與專長
              </div>
              <div
                className={`px-4 py-2 text-center transition-all duration-400 cursor-pointer border border-brand-text ${activeTab === 'future' ? "bg-brand-text text-brand-bg" : "bg-brand-bg text-brand-text"}`}
                onClick={() => setActiveTab('future')}
              >
                未來期許
              </div>
            </div>

            <div className="w-full font-medium text-[16px] leading-8 text-justify mb-6 border-x border-b border-brand-text px-8 py-7 min-h-[320px] whitespace-pre-line">
              {tabContents[activeTab]}
            </div>


          </div>

          <div className="flex flex-col md:flex-row md:justify-between">

            {/* edu */}
            <div className="mb-10 w-full md:w-[45%] pb-4 border-b border-brand-text md:border-0">
              <div className="font-bold text-[16px] mb-6">
                ▌EDUCATION
              </div>

              {edu.map((item, index) => (
                <EduItem
                  key={index}
                  title={item.title}
                  college={item.college}
                  description={item.description}
                />
              ))}

            </div>



            {/* exp */}
            <div className="mb-10 w-full md:w-[45%] pb-4">
              <div className="font-bold text-[16px] mb-6">
                ▌EXPERIENCE
              </div>

              {exp.map((item, index) => (
                <ExpItem
                  key={index}
                  title={item.title}
                  place={item.place}
                  description={item.description}
                />
              ))}

            </div>

          </div>


        </div>

      </div>
    </>
  );
}
