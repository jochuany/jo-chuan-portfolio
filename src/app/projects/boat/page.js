import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/boat");

if (!projectInfo) return null;


const content =
{
  ...projectInfo,
  introduction: "此作品為自製的歌詞動畫，將抽象的歌詞以動畫方式呈現。考量歌曲較抒情，因此動畫節奏較緩慢，視覺設計也配合歌詞的浪漫氛圍，加入蒲公英、海邊、夕陽等元素。此外，背景使用漸層效果，讓畫面更柔和、有層次與立體感。",
  cta: "Watch on YouTube ",
  link: "https://youtu.be/mht2IoXIQp0?si=8IQKSslJAI8XXNi5",
  details: [
    {
      subtitle: "腳本規劃與素材製作：",
      description: "根據歌詞描述到的事物與意境，初步設計畫面元素、思考各場景之間如何流暢轉場，並將所需素材製作成可進行動態化的物件。"
    },
    {
      subtitle: "動態化與整合：",
      description: "配合歌曲的節奏將物件動態化，並製作轉場，另外在原有物件的基礎上加上漸層效果，最後加上歌詞完成動畫。"
    }
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
