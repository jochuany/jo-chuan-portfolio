import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/design_vnccu");

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
  introduction: "為政大之聲實習電台開播週活動設計的主視覺。以繽紛、明亮風格呈現，象徵電台的活潑、開放與多元；亦針對不同帶狀的性質，設計不同樣式的頭貼。",
  links: [
    {
      cta: "View on Facebook ",
      link: "https://www.facebook.com/share/p/1L6hnGVNay/"
    }
  ],
  details: [
    {
      subtitle: "圖像繪製與設計：",
      description: "使用電繪版與 Adobe Illustrator 繪製活動主視覺所需之 Facebook 大頭貼、宣傳 Banner，供官方帳號及電台成員使用；另設計實體海報張貼於校園中。"
    }
  ],
  photos: [
    "/images/design_vnccu/vnccu-01.jpg",
    "/images/design_vnccu/vnccu-02.jpg",
    "/images/design_vnccu/vnccu-03.jpg",
    "/images/design_vnccu/vnccu-04.jpg",
    "/images/design_vnccu/vnccu-05.jpg",
    "/images/design_vnccu/vnccu-06.jpg",
    "/images/design_vnccu/vnccu-07.jpg"
  ]
}

export default function design_Vnccu() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
