import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/cross");

if (!projectInfo) return null;

const content =
{
  ...projectInfo,
  introduction: "政大指南路二段周邊道路擁擠、無交通號誌（註：該馬路已於 2025 年底裝設交通號誌），長期以來行人過馬路時，需要非常謹慎確認有無汽機車、公車通過。此遊戲以「天天過馬路」作為原型參考，將場景改為政大周邊，搭配劇情的方式、融入政大學生的生活來呈現。我們希望遊戲帶來娛樂的同時，也能喚起政大學生及附近居民對此地交通安全的重視。",
  cta: "Play in Browser (Chrome) \u2197",
  link: "https://rjyang.itch.io/cross-the-zhinan-road-v2",
  details: [
    {
      subtitle: "主要程式撰寫：",
      description: "此專案中我擔任工程的角色，負責撰寫玩家的人物操作、場景與車子生成、特殊道具生成與效果、以及各關卡串聯的程式碼。"
    },
    {
      subtitle: "場景特效：",
      description: "基本遊戲邏輯完成後，在各關卡環境加上下雨、調整光線等特效，為遊戲增添變化。"
    },
    {
      subtitle: "擔任組長：",
      description: "在此專案中我亦擔任組長，除了協助整合美術組與程式組的工作內容，亦掌握專案進度，確保專案於實現前完成。"
    }
  ],
  photos: [
    "/images/cross/cross-01.png",
    "/images/cross/cross-02.png",
    "/images/cross/cross-03.png",
    "/images/cross/cross-04.png",
    "/images/cross/cross-05.png",
    "/images/cross/cross-06.png",
    "/images/cross/cross-07.png",
    "/images/cross/cross-08.png",
    "/images/cross/cross-09.png",
    "/images/cross/cross-10.png",
    "/images/cross/cross-11.png",
    "/images/cross/cross-12.png",
    "/images/cross/cross-13.png",
    "/images/cross/cross-14.png"
  ]
}

export default function Cross() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
