import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "SPIKE IT UP!!",
  category: "網頁遊戲",
  year: "2025",
  tools: ["HTML", "TailwindCSS", "Next.js", "React Hooks"],
  introduction: "個人專案，獨自完成遊戲機制設計、介面與流程規劃、程式撰寫，視覺素材由 AI 協助發想後自行製作。Next.js 為課堂中學習，擁有基礎知識後，React Hook 使用 Vibe coding 自學應用。",
  cta: "Play in Browser \u2197",
  link: "https://volleyball-spiking-game.vercel.app/",
  details: [
    {
      subtitle: "遊戲機制設計與規劃：",
      description: ""
    },
    {
      subtitle: "視覺素材製作：",
      description: ""
    },
    {
      subtitle: "程式撰寫：",
      description: ""
    },
  ],
  photos: [
    "/images/spike/spike-01.png",
    "/images/spike/spike-02.png",
    "/images/spike/spike-03.png",
    "/images/spike/spike-04.png",
    "/images/spike/spike-05.png",
    "/images/spike/spike-06.png"
  ]
}

export default function Spike() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
