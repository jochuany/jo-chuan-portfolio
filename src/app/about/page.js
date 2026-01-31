import { EduExpItem } from "@/components/EduExpItem";
import { SkillItem } from "@/components/SkillItem";

export const metadata = {
  title: "About | Jo-Chuan's Portfolio"
};

const skills = [
  {
    title: "視覺設計與資訊動畫",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Audition"]
  },
  {
    title: "使用者體驗與介面設計",
    tools: ["Figma", "Miro", "User Research", "Flowchart", "Wireframing", "Prototyping"]
  },
  {
    title: "前端網頁開發",
    tools: ["HTML", "CSS", "JavaScript", "RWD", "Tailwind CSS", "Next.js", "React Hooks", "Vibe Coding"]
  },
  {
    title: "排版編輯與簡報設計",
    tools: ["Adobe InDesign", "PowerPoint", "Keynote", "Canva"]
  },
  {
    title: "問卷設計與統計分析",
    tools: ["Excel", "SPSS", "Web Scraper", "Flourish"]
  },
  {
    title: "攝影與影像後製",
    tools: ["Adobe Lightroom", "Adobe Photoshop"]
  },
  {
    title: "遊戲開發",
    tools: ["Unity"]
  },
];

const edu = [
  {
    title: "傳播碩士學位學程（M.A.）",
    place: "國立政治大學",
    time: "2023/09 - 2025/12",
  },
  {
    title: "廣告學系 傳播設計組（B.A.）\n數位內容與科技學士學位學程（B.S.）",
    place: "國立政治大學",
    time: "2018/09 - 2023/06",
  },
];

const exp = [
  {
    title: "研究助理",
    place: "TLab 媒體心理實驗室",
    time: "2024/02 - 2025/10",
    description: [
      "協助社會科學、媒體心理實驗法之研究進行，與助理群合作接待超過百位受試者，擁有 VR 頭顯操作經驗。",
      "協助沉浸科技、虛擬實境社交等主題之文獻搜集整理。",
      "文化科技計畫：協助搜集國內外沉浸文化科技案例，整合為臺灣文化科技產業地圖。",
      "數位信任計畫：協助訪談資料整理、文獻探討、撰寫報告。",]
  },
  {
    title: "實習助理（記者、資訊編輯、節目製作）",
    place: "政大之聲廣播電台",
    time: "2019/09 - 2022/06",
    description: [
      "廣播節目製作：合作完成節目企劃、採訪、主持、剪輯、現場播出。",
      "新聞資訊編輯：編輯國內外重要新聞稿，並於整點 Live 播報；帶領助理檢討專題稿件。",
      "深度專題產製：合作擬訂專題企劃、採訪、撰寫、過音，完成 2000 字以上之深度專題報導。",
      "視覺設計協助：參與開播活動視覺設計（含實體海報、線上社群）、帶狀節目視覺設計、節目主視覺設計。",]
  },
];



export default function About() {


  return (
    <>
      <div className="flex w-screen h-auto mt-[60px] py-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="w-[90%] md:w-[85%] lg:w-[80%] flex flex-col justify-between lg:flex-row items-start">

          {/* photo & about */}
          <div className="w-full lg:w-[30%] mb-10 lg:mb-0 lg:sticky lg:top-[100px]">

            <div style={{ backgroundImage: `url(images/myphoto.png)` }} className={`h-[200px] max-w-[200px] mb-4 rounded-md lg:grayscale-50
                bg-contain bg-center bg-no-repeat transition-all duration-500 ease lg:hover:grayscale-0`}></div>


            <div className="font-semibold mb-6 text-[18px]">楊 若絹<span className="text-[12px]">（ㄐㄩㄢˋ）</span></div>

            <div className="mb-6 text-[14px] text-brand-text font-normal leading-7 text-justify">
              <p className="mb-3">我是一位具備設計、程式與研究背景的跨領域實踐者，擁有製作資訊動畫的經驗，也能進行前端實作；碩士期間的 XR 媒體心理學研究，則賦予我嚴謹的數據分析、邏輯論述與寫作能力。</p>
              <p>我亦擁有數位產品規劃的思維，能執行使用者研究、Flowchart、Wireframe 到 Prototype 的設計流程。跨領域背景使我能擔任研究、設計與開發之間的溝通橋樑，並能以技術實作的角度思考設計的可行性。</p>
            </div>

            <a href="/document/Jo Chuan Yang_resume 2026.pdf" target="_blank"
              className={`text-[16px] text-brand-primary font-semibold transition-all duration-300 ease
                relative inline-block group hover:text-brand-text
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-brand-primary
                after:scale-x-100 after:origin-right after:transition-transform after:duration-300 after:ease-out lg:hover:after:scale-x-0`}>
              Download Resume
              <span className="ml-1 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease">&#8599;</span>
            </a>

          </div>


          {/* edu, exp, skill */}
          <div className="w-full lg:w-[60%]">

            {/* edu */}
            <div className="mb-10">

              <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
                {"// "}Education
              </div>

              <div className="text-[16px] text-brand-text font-normal leading-8 flex flex-col">

                {edu.map((item, index) => (
                  <EduExpItem key={index} {...item} />
                ))}

              </div>

            </div>

            {/* exp */}
            <div className="mb-10">

              <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
                {"// "}Experience
              </div>

              <div className="text-[16px] text-brand-text font-normal leading-8 flex flex-col">

                {exp.map((item, index) => (
                  <EduExpItem key={index} {...item} />
                ))}

              </div>

            </div>


            {/* skills */}
            <div className="mb-10">
              <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
                {"// "}Skills
              </div>

              <div className="text-[16px] text-brand-text font-normal flex flex-col">

                {skills.map((item, index) => (
                  <SkillItem key={index} {...item} />
                ))}

              </div>

            </div>

          </div>

        </div>
      </div >
    </>
  );
}