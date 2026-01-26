import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "麥側過馬路",
  category: "3D 遊戲",
  year: "2023 (2025 v2)",
  tools: ["Unity", "C#"],
  introduction: "團隊合作專案，此遊戲以「天天過馬路」作為原型，將場景改為政大周邊，並且以劇情呈現，融入政大學生的生活。我們希望遊戲帶來娛樂的同時，也能喚起政大學生及附近居民對此地交通安全的重視。",
  cta: "Play in Browser (Chrome) \u2197",
  link: "https://rjyang.itch.io/cross-the-zhinan-road-v2",
  details: [
    {
      subtitle: "主要程式撰寫：",
      description: "人物操作、關卡串聯、道具呈現"
    },
    {
      subtitle: "場景特效：",
      description: "下雨、冒煙、光線等"
    },
    {
      subtitle: "擔任組長：",
      description: "在此專案中我亦擔任組長，協助整合美術組與程式組、掌握專案進度。"
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
