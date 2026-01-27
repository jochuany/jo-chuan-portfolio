import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/period");

if (!projectInfo) return null;

const content =
{
  ...projectInfo,
  introduction: "此專案為整合「月經知識問答」與「經期情緒安撫」的聊天機器人，亦加入政大周邊月經地圖、生理用品剩餘規格（僅模擬呈現）。在進行設計思考的流程中，我們發現網路上的月經知識氾濫、月經地圖現有問題、以及女性經期間需要心靈上的支撐等問題，因而打造出此網頁作為解決方案。",
  cta: "Demo on YouTube \u2197",
  link: "https://youtu.be/ts6eESkYaKE?si=Gyy9lJ73vd44rRV_",
  details: [
    {
      subtitle: "參與設計思考流程：",
      description: "與組員共同利用同理心地圖、人物誌、使用者旅程地圖等工具，將女性面臨的困境更加具體化，並初步訂定解決方案的方向。"
    },
    {
      subtitle: "定義解決方案與產品區隔：",
      description: "根據設計思考結果，與組員共同定義出解決方案所需提供的功能，並與現有服務做出區隔——機器人訓練的月經知識均來自官方、或具有可信度的醫療機構；可透過關鍵詞轉換不同語氣，滿足相應的需求；生理用品規劃顯示距離、剩餘用品的數量（僅提案與模擬，專案 Demo 中未實現），更符合需求。"
    },
    {
      subtitle: "網頁前端串聯：",
      description: "將組員的介面設計，使用 HTML、CSS 切版成手機網頁形式，再將組員訓練好的機器人、以及整合後的月經地圖串進網頁中，上傳至 Github Pages。"
    },
  ],
  photos: [
    "/images/period/period-01.png",
    "/images/period/period-02.png",
    "/images/period/period-03.png"
  ]
}

export default function Period() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
