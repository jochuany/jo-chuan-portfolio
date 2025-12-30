import Image from "next/image";
import { EduItem } from "@/components/EduItem";
import { ExpItem } from "@/components/ExpItem";

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

const awd = [
  {
    title: "學生論文發表",
    award: "台灣資訊社會研究學會年會暨論文研討會｜2024",
    description: [
      "通過雙匿名審查之研討會，進行論文發表。",
      "研究主題：不同虛擬化身參與新聞遊戲之效果研究。"
    ]
  },
  {
    title: "最佳教育文化節目獎 入圍",
    award: "第 46 屆藝美獎｜2021",
    description: [
      "第一次製作節目即入圍有大學生小金鐘之稱的全國大專院校競賽。",
      "入圍節目：九米九的世界（排球知識、採訪節目）。"
    ]
  },
];

export default function About() {
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
              楊若絹
            </div>

            <div className="w-full font-medium text-[16px] leading-8 text-justify mb-6">
              1999 年生，畢業於國立政治大學傳播碩士學位學程。個性認真、負責、在乎細節，樂於學習和挑戰新事物。擁有設計、程式、研究的跨領域的背景，擅長利用網路資源自學各種知識與技術是我的優勢。<br /><br />
              大學時累積許多數位敘事、資訊動畫與視覺設計的專案經驗，能設計流暢的腳本與轉場來說好一個故事。雙主修數位內容後開始接觸程式語言，曾參與遊戲製作專案，並從自學 HTML / CSS 到掌握 Tailwind CSS / Next.js 前端技術，期望成為一名了解開發邏輯的設計師。碩士期間則專注於媒體心理學的研究領域，培養了定義、論述與驗證問題的能力，並在實驗室的工作經驗中對沉浸科技產生興趣，擁有操作 VR 設備、拍攝與剪輯 360 影片的經驗。<br /><br />
              回顧過去做設計、寫程式到做研究的經歷，其實都指向同一目標——「創造更好的數位體驗」。製作數位敘事能更有效地向受眾傳達議題、學習前端語言讓我能從開發的角度去思考設計的可行性、研讀媒體心理學理論也幫助我更了解媒介使用者的心理歷程。期待未來能發揮所長，與不同領域的夥伴合作，共同優化大眾與數位世界的互動體驗。
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
