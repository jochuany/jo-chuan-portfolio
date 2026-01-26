"use client";
import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "A HA~",
  category: "產品規劃",
  year: "2025",
  tools: ["Figma", "Adobe Illustrator"],
  introduction: "以現有產品 Pinterest 為參考，在實際觀察使用者的操作後，發現其在有明確目標時「搜尋過程繁瑣耗時」的痛點，基於此設計產品新功能與商業模式。在演算法推薦的基礎功能下，規劃導入 AI 搜尋與進階篩選功能，旨在為內容創作、行銷企劃從業者創造更有搜尋效率的視覺靈感發掘平台。",
  cta: "View on Figma \u2197",
  link: "https://www.figma.com/design/hrJbWzRWhuwEiSAa2Qg7jn/AHA?node-id=305-233&t=3N23Bhb5J4ErT9Ib-1",
  details: [
    {
      subtitle: "使用者調查與訪談，確認痛點與解方：",
      description: "發布調查問卷，初步了解使用產品時面臨的問題；根據調查資料設計訪談方向，訪談 2 名行銷企劃從業者、並觀察他們的操作過程，確立「搜尋過程繁瑣耗時」的痛點，以此發現來規劃新功能。"
    },
    {
      subtitle: "訂定產品需求與商業模式：",
      description: "根據使用者訪談結果分析產品需求的重要程度，決定納入 AI 指令搜尋、多圖整合搜尋、進階篩選的新功能；並針對原有功能、新功能與不同類型的使用者，初步訂定產品的商業模式。"
    },
    {
      subtitle: "Flowchart 規劃與 Prototype：",
      description: "規劃產品新功能的流程圖，並進一步製作 Prototype。"
    },
    {
      subtitle: "LOGO 設計、UI 介面設計：",
      description: "以「A HA~」感嘆詞作為產品 slogan，代表新功能幫助使用者成功找到參考圖的瞬間；使用「燈泡」作為 LOGO 形象，並在燈絲中融入 slogan 英文字。"
    }
  ],
  photos: [
    "/images/aha/aha-01.png",
    "/images/aha/aha-02.png",
    "/images/aha/aha-03.png",
    "/images/aha/aha-04.png",
    "/images/aha/aha-05.png",
    "/images/aha/aha-06.png",
    "/images/aha/aha-07.png",
    "/images/aha/aha-08.png",
    "/images/aha/aha-09.png",
    "/images/aha/aha-10.png",
    "/images/aha/aha-11.png",
    "/images/aha/aha-12.png",
  ]
}


export default function Aha() {

  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
