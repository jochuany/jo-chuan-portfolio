import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "球后的崛起",
  category: "資訊動畫",
  year: "2022",
  tools: "Adobe Illustrator / Adobe After Effects",
  introduction: "個人專案，以自己喜歡的職業球員為題材，製作約一分半的資訊動畫，介紹其球風、成就等。由個人獨立完成腳本、繪製素材、動態化、配音配樂、剪輯，在企劃階段即著重場景間的轉換，電視、網球、快門、報紙，皆為搭配敘事轉場的關鍵物件，使整體畫面銜接更流暢。",
  cta: "Watch on YouTube \u2197",
  link: "https://youtu.be/y2TkF0Tm3JY?si=bADOPmTrxx7FX2uD",
  details: [
    {
      subtitle: "腳本撰寫與分鏡設計：",
      description: "針對主題蒐集相關資料，抓取重點，設計流暢的腳本、分鏡、旁白與轉場。"
    },
    {
      subtitle: "素材繪製與動態化：",
      description: "根據設計好的腳本，列出動畫所需要的素材，使用 Illustrator 以電繪版繪製或拉向量圖，再依照旁白或配樂節奏，使用 After Effects 進行動態化、加上特效與轉場。"
    },
    {
      subtitle: "配音與後製剪輯：",
      description: "因為擁有電台實習的經驗，我能錄製清楚的旁白，並為動畫搜尋合適音效，剪輯成完整的數位敘事影片。"
    }
  ],
  photos: [
    "/images/tennis/tennis-01.png",
    "/images/tennis/tennis-02.png",
    "/images/tennis/tennis-03.png",
    "/images/tennis/tennis-04.png",
    "/images/tennis/tennis-05.png",
    "/images/tennis/tennis-06.png"
  ]
}

export default function Tennis() {
  return (
    <>
      <ProjectPages {...content} />

    </>
  );
}
