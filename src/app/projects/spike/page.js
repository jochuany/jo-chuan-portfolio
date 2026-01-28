import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/spike");

if (!projectInfo) return null;

export async function generateMetadata() {
  return {
    title: `${projectInfo.title} | Jo-Chuan's Protfolio`,
    description: `${content.introduction}`,
  };
}

const content =
{
  ...projectInfo,
  introduction: "此專案為排球網頁小遊戲。起初想製作一個有別於「皮卡丘打排球」對打形式的小遊戲，且目標在於釋放研究生的學術壓力，因而定位成敲打鍵盤的舒壓遊戲。遊戲中加入排球技術的細節，能引起喜愛排球運動者的共鳴與樂趣。",
  cta: "Play in Browser ",
  link: "https://volleyball-spiking-game.vercel.app/",
  details: [
    {
      subtitle: "遊戲機制設計：",
      description: "規劃遊戲機制，將過程劃分為三個階段：起跳時機、落點定位、扣球力道，並設計分數計算方式，以及列出遊戲所需素材。"
    },
    {
      subtitle: "視覺素材製作：",
      description: "先由 AI 協助生成初步 pixel 風格的素材，再根據遊戲所需與視覺風格進行修改。"
    },
    {
      subtitle: "程式撰寫：",
      description: "以 Next.js 開發遊戲，過程中與 AI 進行協作、再修改成符合遊戲要求。"
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
