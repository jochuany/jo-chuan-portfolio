import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/fruit");

if (!projectInfo) return null;

const content =
{
  ...projectInfo,
  introduction: "以水果為題策劃一社群品牌，主要受眾為政大學生，分享與生活相關的水果小知識。品牌名「指南」為「學校路名」與「介紹」的意義雙關詞。",
  cta: "View on Instagram \u2197",
  link: "https://www.instagram.com/zhinanfruit.co/",
  details: [
    {
      subtitle: "Logo 設計：",
      description: "結合「水果」與「指南」之意象，將水果的剖面設計為指南針。採用橘黃色為主色調，為品牌營造活潑、親民、生活感的形象。"
    },
  ],
  photos: [
    "/images/fruit/fruit-01.png",
    "/images/fruit/fruit-02.png",
    "/images/fruit/fruit-03.png",
    "/images/fruit/fruit-04.png"
  ]
}

export default function Fruit() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
