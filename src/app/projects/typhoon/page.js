import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "颱風假到底怎麼放？",
  category: "資訊圖表、資訊動畫",
  year: "2022",
  tools: ["PowerPoint", "Excel"],
  introduction: "團體專案，綜合有關颱風假標準、實施方式解釋、過往案例、以及政治影響的資訊視覺化動畫。主要負責腳本協作、圖表美化與資訊動畫製作，將抽象的數據、難懂的法案以簡單直覺的形式呈現。",
  cta: "Watch on YouTube \u2197",
  link: "https://youtu.be/8sklFG5qRm0?si=DLpqVpQBirhhybVk",
  details: [
    {
      subtitle: "資料蒐集與腳本協作：",
      description: ""
    },
    {
      subtitle: "圖表美化：",
      description: ""
    },
    {
      subtitle: "資訊動畫製作：",
      description: ""
    }
  ],
  photos: [
    "/images/typhoon/typhoon-01.png",
    "/images/typhoon/typhoon-02.png",
    "/images/typhoon/typhoon-03.png",
    "/images/typhoon/typhoon-04.png",
    "/images/typhoon/typhoon-05.png",
    "/images/typhoon/typhoon-06.png",
    "/images/typhoon/typhoon-07.png",
    "/images/typhoon/typhoon-08.png",
    "/images/typhoon/typhoon-09.png",
    "/images/typhoon/typhoon-10.png"
  ]
}

export default function Typhoon() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
