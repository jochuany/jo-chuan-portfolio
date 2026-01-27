import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/mirror");

if (!projectInfo) return null;

const content =
{
  ...projectInfo,
  introduction: "此為數位內容第 14 屆畢業製作專案。作品希望傳達數位世界與現實世界之間的落差——先自單面鏡反射自我開始（現實世界）；接著螢幕亮起，將看到光鮮亮麗的社群貼文與場景（數位世界），能透過 Kinect 動作捕捉裝置操縱人物；體驗結束時螢幕也變黑，體驗者所見將再次變回單面鏡反射的自我（回到現實世界的空虛感）。作品完成後在華山文創園區烏梅劇院進行為期五天的展覽，有許多校內校外人士前來觀展，我們亦設計體驗流程，包括介紹、講解、輔助教學等，帶領觀展者體驗我們的作品。",
  cta: "Demo on YouTube \u2197",
  link: "https://youtu.be/wE1DucIL8D8?si=ghNpbITCJTGbBKuE",
  details: [
    {
      subtitle: "程式協作：",
      description: "使用 Kinect 的預設套件為基礎，與組員共同修改程式以符合我們的作品所需。"
    },
    {
      subtitle: "場景建模：",
      description: "負責其中一個數位世界「酒吧」的場景建模。先參考現實世界的酒吧實景後，使用 Blender 進行建模。為了符合主題（數位世界）而設計多個發光的燈條，以呈現一個科技感、現代感的酒吧場景。"
    },
    {
      subtitle: "展覽導覽與解說：",
      description: "參與展覽期間的導覽工作，為體驗者介紹作品、協助其體驗。"
    }
  ],
  photos: [
    "/images/mirror/mirror-01.png",
    "/images/mirror/mirror-bar.jpg",
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
