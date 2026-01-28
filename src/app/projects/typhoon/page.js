import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/typhoon");

if (!projectInfo) return null;

const content =
{
  ...projectInfo,
  introduction: "此為綜合有關颱風假標準、實施方式解釋、過往案例、以及政治影響的資訊動畫，將抽象的數據、難懂的法案以圖表或視覺化呈現，使觀者能更理解颱風假背後的問題與標準。",
  cta: "Watch on YouTube ",
  link: "https://youtu.be/8sklFG5qRm0?si=DLpqVpQBirhhybVk",
  details: [
    {
      subtitle: "資料蒐集與腳本協作：",
      description: "與組員合作搜集颱風假的資訊，並依照不同子主題（包含颱風假意涵、放假標準、成功與失敗案例等）整理成腳本。"
    },
    {
      subtitle: "圖表美化：",
      description: "將過去報導採用過的數據製作成符合本專案視覺風格的圖表，並加上動畫來凸顯重點、增加易讀性。"
    },
    {
      subtitle: "資訊動畫製作：",
      description: "將圖表與資訊動態化，並加上旁白、調整動畫節奏，輸出成資訊動畫。"
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
