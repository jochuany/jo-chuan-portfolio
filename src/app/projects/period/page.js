import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "月來悅貼心",
  category: "網頁前端",
  year: "2024",
  tools: ["HTML", "CSS", "JavaScript"],
  introduction: "團體專案。內含整合月經知識問答、經期情緒安撫的機器人，以及政大周邊月經地圖的手機網頁。",
  cta: "Demo on YouTube \u2197",
  link: "https://youtu.be/ts6eESkYaKE?si=Gyy9lJ73vd44rRV_",
  details: [
    {
      subtitle: "網頁前端串聯：",
      description: "將介面設計轉化為可用的手機網頁，以及將機器人與地圖串進網頁中。"
    },
  ],
  photos: [
    "/images/period/period-01.png",
  ]
}

export default function Period() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
