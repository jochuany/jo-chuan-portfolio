import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/nccu3m");

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
  introduction: "為政大製作的英文簡介資訊動畫。視覺以簡潔的文字、icon 為主，讓觀眾能在聆聽聲音旁白的同時掌握關鍵資訊。",
  cta: "Watch on YouTube ",
  link: "https://youtu.be/nZVRC3BNZkk?si=-q0SE2d1uTnZu0sS",
  details: [
    {
      subtitle: "畫面設計與動態化：",
      description: "負責 0:00 ~ 1:20 的動態化與最後的 CTA 製作。由於畫面中僅有數字、文字、icon，因此搭配較為豐富的色彩，也為 icon 加上微動畫。"
    },
  ],
  photos: [
    "/images/nccu3m/nccu3m-01.png",
    "/images/nccu3m/nccu3m-02.png",
    "/images/nccu3m/nccu3m-03.png",
    "/images/nccu3m/nccu3m-04.png",
    "/images/nccu3m/nccu3m-05.png",
    "/images/nccu3m/nccu3m-06.png",
    "/images/nccu3m/nccu3m-07.png",
    "/images/nccu3m/nccu3m-08.png",
  ]
}

export default function Nccu3m() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
