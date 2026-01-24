import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "Chance!!",
  category: "產品規劃",
  year: "2025",
  tools: "Figma",
  introduction: "社群媒體上的資訊龐雜未分類、訊息格式不統一、且容易受演算法影響，排球球友找尋資訊時可能耗費大把時間。本專案以排球愛好者的需求為核心，旨在整合所有排球人需要的排球資訊，讓場主或比賽主辦方能清楚地上架資訊、球友也能有效率地瀏覽並找到資訊。",
  cta: "View on Figma \u2197",
  link: "https://www.figma.com/design/OyWvP0ZWHOMdrA2BjMrbaM/Chance--?node-id=163-2&t=yV1Du5F40LtkdnJB-1",
  details: [
    {
      subtitle: "產品定義與專案目標設定：",
      description: "觀察 Facebook 社團上的資訊呈現方式與活躍度，分析排球愛好者的需求與痛點，發現球友常常找不到資訊、搜尋也不一定準確，由此定義產品方向與專案目標。"
    },
    {
      subtitle: "IA、Flowchart 與 Wireframe 規劃：",
      description: "設定球友、球館與場主等主要受眾群，根據不同受眾角色與其主要任務，規劃資訊架構、Flowchart 與 Wireframe，擬定主要產品功能。"
    },
    {
      subtitle: "LOGO、UI 介面與 Prototytpe：",
      description: "以排球、黃色、藍色為主要形象，使用術語「Chance」同時符合排球運動精神與產品理念，設計出 LOGO、並將視覺風格延續至 UI 介面與 Prototype。"
    },
    {
      subtitle: "風險規劃與評估：",
      description: "思考產品上線可能遇到的內部與外部風險，並評估其嚴重性、影響程度與處置方式（AI 工具協助）。"
    }
  ],
  photos: [
    "/images/chance/chance-01.png",
    "/images/chance/chance-02.png",
    "/images/chance/chance-03.png",
    "/images/chance/chance-04.png",
    "/images/chance/chance-05.png",
    "/images/chance/chance-06.png",
    "/images/chance/chance-07.png",
    "/images/chance/chance-08.png",
    "/images/chance/chance-09.png",
    "/images/chance/chance-10.png",
    "/images/chance/chance-11.png",
    "/images/chance/chance-12.png",
    "/images/chance/chance-13.png"
  ]
}

export default function Chance() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
