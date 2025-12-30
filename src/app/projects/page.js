import Image from "next/image";
import { ProjectItem } from "@/components/ProjectItem";

const projects = [
  {
    href: "/projects/chance",
    title: "CHANCE!!",
    category: "產品規劃",
    year: "2025"
  },
  {
    href: "/projects/spike",
    title: "SPIKE IT UP!!",
    category: "網頁遊戲",
    year: "2025"
  },
  {
    href: "/projects/aha",
    title: "A HA~",
    category: "產品規劃",
    year: "2024"
  },
  {
    href: "/projects/period",
    title: "月來悅貼心",
    category: "網頁前端",
    year: "2024"
  },
  {
    href: "/projects/report",
    title: "薪租翹翹板",
    category: "專題網站",
    year: "2023"
  },
  {
    href: "/projects/mirror",
    title: "鏡像之境",
    category: "互動體驗",
    year: "2023"
  },
  {
    href: "/projects/cross",
    title: "麥側過馬路",
    category: "3D 遊戲",
    year: "2023"
  },
  {
    href: "/projects/tennis",
    title: "球后的崛起",
    category: "資訊動畫",
    year: "2022"
  },
  {
    href: "/projects/boat",
    title: "〈船〉歌詞 MV",
    category: "動畫",
    year: "2022"
  },
  {
    href: "/projects/fruit",
    title: "水果指南",
    category: "Logo 設計",
    year: "2022"
  },
  {
    href: "/projects/typhoon",
    title: "颱風假到底怎麼放？",
    category: "資訊圖表／資訊動畫",
    year: "2022"
  },
  {
    href: "/projects/vnccu",
    title: "政大之聲開播週",
    category: "主視覺設計",
    year: "2021"
  },

];

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

          <div className="flex md:hidden font-bold mb-6 text-[16px]">
            ▌ALL PROJECTS
          </div>

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                {...project} // 這是解構賦值的寫法，會自動對應 props
                isLast={index === projects.length - 1}
              />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
