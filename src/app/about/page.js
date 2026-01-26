"use client";
import Image from "next/image";

const design = ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Audition"];
const uiux = ["Figma", "Miro", "User Research"];
const frontend = ["HTML", "CSS", "JavaScript", "RWD", "Tailwind CSS", "Next.js", "React Hooks"];
const photo = ["Adobe Lightroom", "Adobe Photoshop"];
const stats = ["Excel", "SPSS", "Web Scraper"];
const game = ["Unity"];



export default function About() {


  return (
    <>
      <div className="flex w-screen h-auto mt-[60px] py-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="w-[90%] md:w-[85%] lg:w-[80%] flex flex-col justify-between lg:flex-row items-start">

          {/* photo & about */}
          <div className="w-full lg:w-[30%] mb-10 lg:mb-0 lg:sticky lg:top-[100px]">

            <div style={{ backgroundImage: `url(images/myphoto.png)` }} className={`h-[200px] max-w-[200px] md:grayscale-50
                bg-contain bg-center bg-no-repeat transition-all duration-500 ease md:hover:grayscale-0`}></div>


            <div className="mt-4 font-semibold mb-6 text-[18px]">楊 若絹<span className="text-[12px]">（ㄐㄩㄢˋ）</span></div>

            <div className="text-[14px] text-brand-text font-normal leading-7 text-justify">
              我是一位具備設計、程式與研究背景的跨領域實踐者，擁有製作資訊動畫的經驗，也能進行前端實作；碩士期間的 XR 媒體心理學研究，則賦予我嚴謹的數據分析、邏輯論述與寫作能力。<br /><br />
              我亦擁有數位產品規劃的思維，能執行使用者研究、Flowchart、Wireframe 到 Prototype 的設計流程。跨領域背景使我能擔任研究、設計與開發之間的溝通橋樑，並能以技術實作的角度思考設計的可行性。
            </div>

          </div>



          <div className="w-full lg:w-[60%]">

            {/* edu */}
            <div className="mb-10">

              <div className="">

                <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
                  {"// "}Education
                </div>

                <div className="text-[16px] text-brand-text font-normal leading-8 flex flex-col">

                  <div className="mb-6 md:hover:text-brand-primary transition-all duration-300 ease">
                    <div className="font-medium">傳播碩士學位學程（M.A.）</div>
                    <div className="flex justify-between font-normal">
                      <div>國立政治大學</div>
                      <div>2023/09 - 2025/12</div>
                    </div>
                  </div>

                  <div className="mb-6 md:hover:text-brand-primary transition-all duration-300 ease">
                    <div className="font-medium">廣告學系 傳播設計組（B.A.）<br />數位內容與科技學士學位學程（B.S.）</div>
                    <div className="flex justify-between font-normal">
                      <div>國立政治大學</div>
                      <div>2018/09 - 2023/06</div>
                    </div>
                  </div>

                </div>

              </div>

            </div>



            {/* exp */}
            <div className="mb-10">

              <div className="">

                <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
                  {"// "}Experience
                </div>

                <div className="text-[16px] text-brand-text font-normal leading-8 flex flex-col">

                  <div className="mb-6 md:hover:text-brand-primary transition-all duration-300 ease">
                    <div className="font-medium">研究助理</div>
                    <div className="flex justify-between font-normal">
                      <div>TLab 媒體心理實驗室</div>
                      <div>2024/02 - 2025/10</div>
                    </div>
                    <ul className="list-disc pl-4 text-[14px] mt-2">
                      <li>協助社會科學、媒體心理實驗法之研究進行，與助理群合作接待超過百位受試者，擁有 VR 頭顯操作經驗。</li>
                      <li>協助沉浸科技、虛擬實境社交等主題之文獻搜集整理。</li>
                      <li>文化科技計畫：協助搜集國內外沉浸文化科技案例，整合為臺灣文化科技產業地圖。</li>
                      <li>數位信任計畫：協助訪談資料整理、文獻探討、撰寫報告。</li>
                    </ul>
                  </div>

                  <div className="mb-6 md:hover:text-brand-primary transition-all duration-300 ease">
                    <div className="font-medium">實習助理（記者、資訊編輯、節目製作）</div>
                    <div className="flex justify-between font-normal">
                      <div>政大之聲廣播電台</div>
                      <div>2019/09 - 2022/06</div>
                    </div>
                    <ul className="list-disc pl-4 text-[14px] mt-2">
                      <li>廣播節目製作：合作完成節目企劃、採訪、主持、剪輯、現場播出。</li>
                      <li>新聞資訊編輯：編輯國內外重要新聞稿，並於整點 Live 播報；帶領助理檢討專題稿件。</li>
                      <li>深度專題產製：合作擬訂專題企劃、採訪、撰寫、過音，完成 2000 字以上之深度專題報導。</li>
                      <li>視覺設計協助：參與開播活動視覺設計（含實體海報、線上社群）、帶狀節目視覺設計、節目主視覺設計。</li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>



            {/* skills */}
            <div className="mb-10">
              <div className="">

                <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
                  {"// "}Skills
                </div>

                <div className="text-[16px] text-brand-text font-normal flex flex-col">

                  <div className="mb-6">
                    <div className="text-brand-text font-medium leading-8">視覺設計與資訊動畫</div>
                    <div className="flex flex-wrap gap-2">
                      {design.map((item, index) => (
                        <div
                          key={index}
                          className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                        >
                          {item}
                        </div>))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-brand-text font-medium leading-8">使用者研究與介面設計</div>
                    <div className="flex flex-wrap gap-2">
                      {uiux.map((item, index) => (
                        <div
                          key={index}
                          className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                        >
                          {item}
                        </div>))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-brand-text font-medium leading-8">網頁前端</div>
                    <div className="flex flex-wrap gap-2">
                      {frontend.map((item, index) => (
                        <div
                          key={index}
                          className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                        >
                          {item}
                        </div>))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-brand-text font-medium leading-8">攝影與影像後製</div>
                    <div className="flex flex-wrap gap-2">
                      {photo.map((item, index) => (
                        <div
                          key={index}
                          className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                        >
                          {item}
                        </div>))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-brand-text font-medium leading-8">問卷設計與統計分析</div>
                    <div className="flex flex-wrap gap-2">
                      {stats.map((item, index) => (
                        <div
                          key={index}
                          className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                        >
                          {item}
                        </div>))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-brand-text font-medium leading-8">遊戲開發</div>
                    <div className="flex flex-wrap gap-2">
                      {game.map((item, index) => (
                        <div
                          key={index}
                          className={`text-[12px] px-2 py-0.5 bg-brand-graybg inset-shadow-sm rounded-full transition-all duration-300 ease
                            md:hover:bg-brand-primaryLight md:hover:text-brand-bg`}
                        >
                          {item}
                        </div>))}
                    </div>
                  </div>

                </div>

              </div>


            </div>

          </div>

        </div>
      </div >
    </>
  );
}