import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "水果指南",
  category: "LOGO 設計",
  year: "2022",
  tools: "Adobe Illustrator",
  introduction: "團體專案。以水果為題策劃一社群品牌，主要受眾為政大學生，品牌名「指南」為學校路名、介紹意義雙關，分享與生活相關的水果小知識。主要參與品牌規劃，並負責 Logo 設計，結合「水果」與「指南」之意象，以橘黃色為主色調，營造活潑、親民、生活感的形象。",
  cta: "View on Instagram \u2197",
  link: "https://www.instagram.com/zhinanfruit.co/",
  details: [
    {
      subtitle: "",
      description: ""
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
