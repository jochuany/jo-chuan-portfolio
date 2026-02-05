import { EduExpItem } from "@/components/EduExpItem";
import { SkillItem } from "@/components/SkillItem";

export const metadata = {
  title: "About | Jo-Chuan's Portfolio"
};

const skills = [
  {
    title: "視覺設計與資訊動畫",
    skillDescription: "可獨立撰寫敘事腳本並規劃分鏡、設計轉場、製作素材，將抽象的議題以視覺化、動態化的方式呈現，使其更具吸引力。",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Audition"]
  },
  {
    title: "使用者體驗與介面設計",
    skillDescription: "可進行使用者研究發掘痛點，並製作清楚的流程圖、線框稿與原型。具備設計心理學與人機互動基礎知識、熟悉傳播理論，助於應用在設計考量與產品策略中。",
    tools: ["Figma", "Miro", "User Research", "Flowchart", "Wireframing", "Prototyping"]
  },
  {
    title: "前端網頁開發",
    skillDescription: "熟悉前端語言，能將設計稿精準轉化為具響應式設計的網頁。能使用現代框架與函式庫進行開發，並能運用元件庫開發微互動網頁。",
    tools: ["HTML", "CSS", "JavaScript", "RWD", "Tailwind CSS", "Next.js", "React Hooks", "Vibe Coding", "Cursor", "VS Code", "Github"]
  },
  {
    title: "排版編輯與簡報設計",
    skillDescription: "能使用排版編輯軟體，將複雜資訊簡化為易於理解的視覺化簡報，並曾編輯過雜誌、手冊等出版品。",
    tools: ["Adobe InDesign", "PowerPoint", "Keynote", "Canva"]
  },
  {
    title: "問卷設計與統計分析",
    skillDescription: "了解如何設計良好的調查問卷，並將蒐集到的數據進行清理與分析。曾使用 Chrome 插件工具爬取網路資料，並將數據轉化為視覺化圖表。",
    tools: ["Excel", "SPSS", "Web Scraper", "Flourish"]
  },
  {
    title: "攝影與影像後製",
    skillDescription: "能根據不同主題設計影像風格並提出企劃，也能使用影像後製軟體進行修圖與調色。",
    tools: ["Adobe Lightroom", "Adobe Photoshop"]
  },
  {
    title: "遊戲開發",
    skillDescription: "曾合作開發開發 3D 遊戲，並能使用 Blender 建立 3D 模型。",
    tools: ["Unity C#", "Unity UI", "Blender"]
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
      "協助 6 個社會科學／媒體心理學研究實驗法之進行，每個實驗皆與助理群合作接待 100+ 位受試者，以確保數據品質、了解使用者在虛擬實境體驗中的心理行為。",
      "協助沉浸科技體驗、虛擬實境社交主題進行文獻搜集與整理，彙整並掌握媒體心理學領域之最新研究趨勢，與助理群合作累積整理文獻數量 30+ 篇。",
      "參與文化科技計畫：協助搜集國內外沉浸文化科技資料，包含各界定義、國內外成功案例等，並提出分類框架、根據產業架構整合臺灣文化科技產業地圖。",
      "參與數位信任計畫：與助理群合作協助 18 位專家訪談資料整理，並進行 50+ 篇數位信任相關文獻探討，深入瞭解其定義及應用領域，並從科技面、人際面與個體差異 3 面向提出提升數位信任之建議，最終整合成果撰寫成研究報告。",
      "曾拍攝與剪輯 360 全景影片，並擁有 XR 頭戴式顯示器之操作經驗。",
    ]
  },
  {
    title: "實習助理（記者、資訊編輯、節目製作）",
    place: "政大之聲廣播電台",
    time: "2019/09 - 2022/06",
    description: [
      "廣播節目製作：合作完成 3 個節目企劃、採訪、主持、剪輯與現場播出。領導一 4 人小組發想節目企劃，並協助製播工程。",
      "新聞資訊編輯：每週編輯大台北新聞、國內外重要新聞 5+ 篇，並於整點 Live 播報。指導 2 位見習助理檢討並優化專題稿件。",
      "深度專題產製：每週召開線索會，並合作擬訂專題企劃、採訪、撰寫、過音，完成 10+ 篇 2000 字以上之深度專題報導。",
      "視覺設計協助：合作參與 2 個、獨立製作 1 個活動主視覺設計，含實體海報與線上社群用圖，提升視覺一致性。",
    ]
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

            <a href="/document/JoChuanYang_resume.pdf" target="_blank"
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

              <div className="text-[16px] text-brand-text font-normal leading-8 flex flex-col text-justify">

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

              <div className="text-[16px] text-brand-text font-normal leading-8 flex flex-col text-justify">

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

              <div className="text-brand-text font-normal flex flex-col">

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