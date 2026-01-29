import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/portfolioweb");

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
  introduction: "個人作品集網站，彙整自 2021 年至今的專案作品。從介面設計到 Next.js 前端開發皆為獨立完成，並透過 Vercel 進行部署。整體視覺風格以簡潔、乾淨為主，主色選用藍綠色系，呼應個人沉穩、內斂的特質，且藍、綠色在色彩感受上亦與新科技形象相符，象徵我對新科技與數位媒介的興趣。",
  cta: "You Are Here! ",
  link: "",
  details: [
    {
      subtitle: "網站架構規劃與 UI/UX 設計：",
      description: "規劃網站架構、導航邏輯與頁面功能。包含在首頁設計精選作品區；固定導航列與電腦版固定側邊欄；在作品列表中規劃篩選功能；在作品內頁底部加上「Explore More」以提升使用者的留存率與瀏覽深度等。"
    },
    {
      subtitle: "Next.js 前端開發：",
      description: "將設計稿轉化為具響應式設計的網頁。包含作品資訊模組化管理，提升後續擴充的可維護性與資料一致性；針對行動端設計旋轉裝置提示，確保視覺完整性；應用 React Bits 特效庫加入文字動畫等。"
    },
  ],
  photos: [
    "/images/portfolioweb/portfolioweb-01.png",
    "/images/portfolioweb/portfolioweb-02.png",
    "/images/portfolioweb/portfolioweb-04.png",
    "/images/portfolioweb/portfolioweb-05.png",
    "/images/portfolioweb/portfolioweb-06.png",
    "/images/portfolioweb/portfolioweb-07.png",
    "/images/portfolioweb/portfolioweb-08.png",
  ]
}

export default function Portfolioweb() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
