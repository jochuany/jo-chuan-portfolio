import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "NCCU in Under 3 Minutes",
  category: "資訊動畫",
  year: "2023",
  tools: ["Adobe After Effects", "Adobe Premiere"],
  introduction: "合作專案，為政大製作的英文簡介資訊動畫。視覺以簡潔的文字、icon 為主，讓觀眾能在聆聽聲音旁白的同時掌握關鍵資訊。",
  cta: "Watch on YouTube \u2197",
  link: "https://youtu.be/nZVRC3BNZkk?si=-q0SE2d1uTnZu0sS",
  details: [
    {
      subtitle: "",
      description: ""
    },
  ],
  photos: [
    "/images/nccu3m/nccu3m-01.png",
    "/images/nccu3m/nccu3m-02.png",
    "/images/nccu3m/nccu3m-03.png",
    "/images/nccu3m/nccu3m-04.png",
    "/images/nccu3m/nccu3m-05.png",
    "/images/nccu3m/nccu3m-06.png",
    "/images/nccu3m/nccu3m-07.png",
    "/images/nccu3m/nccu3m-08.png",
  ]
}

export default function Nccu3m() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
