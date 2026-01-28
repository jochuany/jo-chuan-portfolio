import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/thesis");

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
  introduction: "碩士期間撰寫的畢業論文。以虛擬實境此一新興媒介為題，關注其「彷彿親臨現場的體驗」對運動觀眾至現場觀賽意圖的影響，並透過實驗法搜集參與者的感受進行數據分析，希望了解——運動觀眾觀看完身歷其境的比賽後，還會想去現場嗎？",
  cta: "View Summary ",
  link: "http://thesis.lib.nccu.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dallcdr&s=id=%22G0112464036%22.&searchmode=basic",
  details: [
    {
      subtitle: "文獻回顧與研究問題定義：",
      description: "針對虛擬實境觀賽、虛擬實境體驗領域進行文獻回顧，了解當前研究成果與相關理論後，論述與定義欲進行研究的問題。"
    },
    {
      subtitle: "實驗設計、刺激物拍攝與實驗執行：",
      description: "研究採用實驗室實驗法，除了獨自設計實驗流程，亦使用當前最新全景攝影相機 Insta360 X5 實地前往拍攝全景影片作為實驗刺激物。實驗共耗時 2 週，招募 87 位受試者。"
    },
    {
      subtitle: "數據清理與統計分析：",
      description: "將實驗蒐集到的數據進行清理，使用 SPSS 軟體與 PROCESS 套件進行統計分析，產出研究結果與圖、表。"
    },
    {
      subtitle: "研究問題回應與討論、結論：",
      description: "根據文獻、理論、問題、實驗、統計結果撰寫成研究討論與結論，完成完整的媒體心理學研究論文。"
    }
  ],
  photos: [
    "/images/thesis/thesis-01.png",
    "/images/thesis/thesis-02.jpg",
  ]
}


export default function Thesis() {

  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
