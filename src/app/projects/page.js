import Image from "next/image";
import { ProjectItem } from "@/components/ProjectItem";

const projects = [
  {
    href: "/projects/chance",
    title: "CHANCE!!",
    category: "產品規劃",
    year: "2025",
    photo: "/images/chance/chance-01.png",
    tool: ["Figma"]
  },
  {
    href: "/projects/spike",
    title: "SPIKE IT UP!!",
    category: "網頁遊戲",
    year: "2025",
    photo: "/images/spike/spike-01.png",
    tool: ["Next.js", "TailwindCSS", "React Hooks"]
  },
  {
    href: "/projects/aha",
    title: "A HA~",
    category: "產品規劃",
    year: "2024",
    photo: "/images/aha/aha-01.png",
    tool: ["Figma"]
  },
  {
    href: "/projects/period",
    title: "月來悅貼心",
    category: "網頁前端",
    year: "2024",
    photo: "/images/period/period-01.png",
    tool: ["HTML", "CSS", "JavaScript"]
  },
  {
    href: "/projects/report",
    title: "薪租翹翹板",
    category: "專題網站",
    year: "2023",
    photo: "/images/report/report-01.png",
    tool: ["HTML", "CSS", "JavaScript", "Web Scraper"]
  },
  {
    href: "/projects/mirror",
    title: "鏡像之境",
    category: "互動體驗",
    year: "2023",
    photo: "/images/mirror/mirror-01.png",
    tool: ["Unity", "Blender"]
  },
  {
    href: "/projects/cross",
    title: "麥側過馬路",
    category: "3D 遊戲",
    year: "2023",
    photo: "/images/cross/cross-01.png",
    tool: ["Unity"]
  },
  {
    href: "/projects/nccu3m",
    title: "NCCU in Under 3 Minutes",
    category: "資訊動畫",
    year: "2023",
    photo: "/images/nccu3m/nccu3m-01.png",
    tool: ["AE"]
  },
  {
    href: "/projects/tennis",
    title: "球后的崛起",
    category: "資訊動畫",
    year: "2022",
    photo: "/images/tennis/tennis-05.png",
    tool: ["AI", "AE", "AU"]
  },
  {
    href: "/projects/boat",
    title: "〈船〉歌詞 MV",
    category: "動畫",
    year: "2022",
    photo: "/images/boat/boat-01.png",
    tool: ["AI", "AE"]
  },
  {
    href: "/projects/fruit",
    title: "水果指南",
    category: "Logo 設計",
    year: "2022",
    photo: "/images/fruit/fruit-03.png",
    tool: ["AI"]
  },
  {
    href: "/projects/typhoon",
    title: "颱風假到底怎麼放？",
    category: "資訊圖表／資訊動畫",
    year: "2022",
    photo: "/images/typhoon/typhoon-01.png",
    tool: ["PPT"]
  },
  {
    href: "/projects/vnccu",
    title: "政大之聲開播週",
    category: "主視覺設計",
    year: "2021",
    photo: "/images/vnccu/vnccu-01.jpg",
    tool: ["AI"]
  },

];

export default function Projects() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] md:w-[80%] lg:w-[70%] mt-[60px]">

          <div className="flex font-bold mb-6 text-[16px]">
            ▌ALL PROJECTS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                {...project} // 解構賦值 自動對應 props
              />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
