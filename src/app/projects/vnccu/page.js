import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "政大之聲開播週活動",
  category: "主視覺設計",
  year: "2021",
  tools: ["Adobe Illustrator", "電繪"],
  introduction: "大學時期於政大之聲實習電台為活動設計的主視覺，以繽紛、明亮風格呈現，象徵電台節目的多元性。由個人獨立完成所有圖像的繪製與設計，包括 Facebook 大頭貼、宣傳 Banner、以及實體海報。",
  cta: "View on Facebook \u2197",
  link: "https://www.facebook.com/share/p/1L6hnGVNay/",
  details: [
    {
      subtitle: "",
      description: ""
    }
  ],
  photos: [
    "/images/vnccu/vnccu-01.jpg",
    "/images/vnccu/vnccu-02.jpg",
    "/images/vnccu/vnccu-03.jpg",
    "/images/vnccu/vnccu-04.jpg",
    "/images/vnccu/vnccu-05.jpg",
    "/images/vnccu/vnccu-06.jpg",
    "/images/vnccu/vnccu-07.jpg"
  ]
}

export default function Vnccu() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
