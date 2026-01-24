import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "鏡像之境",
  category: "互動體驗",
  year: "2023",
  tools: "Unity C# / Blender",
  introduction: "團隊合作專案。數位內容第 14 屆畢業製作專案。透過 Kinect 動作捕捉裝置、單面鏡中反射自我的設計，描述數位世界與現實世界之間的落差。作品完成後在華山文創園區烏梅劇院進行為期五天的展覽，有許多校內校外人士前來觀展，我們亦設計體驗流程，包括介紹、講解、輔助教學等，帶領觀展者體驗我們的作品。",
  cta: "Demo on YouTube \u2197",
  link: "https://youtu.be/wE1DucIL8D8?si=ghNpbITCJTGbBKuE",
  details: [
    {
      subtitle: "程式協作：",
      description: ""
    },
    {
      subtitle: "場景建模：",
      description: ""
    }
  ],
  photos: [
    "/images/mirror/mirror-01.png",
    "/images/mirror/mirror-02.png",
    "/images/mirror/mirror-03.png",
    "/images/mirror/mirror-04.png",
    "/images/mirror/mirror-05.png",
    "/images/mirror/mirror-06.png",
    "/images/mirror/mirror-07.png",
    "/images/mirror/mirror-09.jpg",
    "/images/mirror/mirror-08.jpg",
    "/images/mirror/mirror-10.jpg",
    "/images/mirror/mirror-11.jpg",
  ]
}

export default function Mirror() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
