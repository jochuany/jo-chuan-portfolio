import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";


const content =
{
  title: "〈船〉歌詞 MV",
  category: "動畫",
  year: "2022",
  tools: ["Adobe Illustrator", "Adobe After Effects"],
  introduction: "個人專案。此作品為自製歌詞動畫，將抽象的歌詞以動畫方式呈現，在腳本階段花費較多時間構思如何視覺化。考量歌曲較抒情，因此動畫節奏較緩慢，視覺設計也配合歌詞的浪漫氛圍，加入蒲公英、海邊、夕陽等元素。背景使用漸層效果，讓畫面更有層次和立體感。",
  cta: "Watch on YouTube \u2197",
  link: "https://youtu.be/mht2IoXIQp0?si=8IQKSslJAI8XXNi5",
  details: [
    {
      subtitle: "",
      description: ""
    },
  ],
  photos: [
    "/images/boat/boat-01.png",
    "/images/boat/boat-02.png",
    "/images/boat/boat-03.png",
    "/images/boat/boat-04.png",
    "/images/boat/boat-05.png",
  ]
}

export default function Boat() {
  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
