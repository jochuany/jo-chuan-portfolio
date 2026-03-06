import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";
import { useProject } from "@/hooks/useProject";

const projectInfo = useProject("/projects/thesis_newsgame");

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
  introduction: "新聞遊戲（newsgame）作為傳遞新聞資訊的新興媒材，以具吸引力的方式增進閱聽人對事件的了解，能為遙遠議題帶來關注。遊戲中化身的形象可能帶來不同的遊戲體驗，因此研究希望了解遊戲化身相似性（遊戲化身 vs. 玩家本人之外觀相似程度），如何影響玩家所感知到的欣賞感與利社會意圖？",
  links: [
    {
      cta: "View Summary ",
      link: "https://drive.google.com/file/d/16BsK7YKtlbcEt-QstybsllVZGFKQIwp3/view?usp=sharing"
    }
  ],
  details: [
    {
      subtitle: "文獻回顧與研究問題定義：",
      description: "針對新聞遊戲與其效果、遊戲化身、遊戲體驗感知（欣賞感）等進行文獻回顧，論述與定義欲進行研究的問題。"
    },
    {
      subtitle: "實驗設計、刺激物製作與實驗執行：",
      description: "研究採用實驗室實驗法，除了獨自設計實驗流程，另考量目前尚無可「自訂化身外觀」的新聞遊戲，因此使用 Gather Town 平台，製作知名新聞遊戲《Syrian Journey》的遊戲版本。實驗共招募 72 為受試者。"
    },
    {
      subtitle: "數據清理與統計分析：",
      description: "將實驗蒐集到的數據進行清理，使用 JASP 軟體進行 SEM（結構方程模型）統計分析，並產出研究結果與圖、表。"
    },
    {
      subtitle: "研究問題回應與討論、結論：",
      description: "根據文獻、理論、問題、實驗、統計結果撰寫成研究討論與結論，完成完整小論文，並通過 2024 臺灣資訊社會學會年會之雙匿名審查，進行論文發表。"
    }
  ],
  photos: [
    "/images/thesis_newsgame/newsgame-01.png",
    "/images/thesis_newsgame/newsgame-02.png",
    "/images/thesis_newsgame/newsgame-03.png",
    "/images/thesis_newsgame/newsgame-04.png",
    "/images/thesis_newsgame/newsgame-05.png",
    "/images/thesis_newsgame/newsgame-06.png",
    "/images/thesis_newsgame/newsgame-07.png",
    "/images/thesis_newsgame/newsgame-08.png",
    "/images/thesis_newsgame/newsgame-09.png",
    "/images/thesis_newsgame/newsgame-10.png",
    "/images/thesis_newsgame/newsgame-11.png",
    "/images/thesis_newsgame/newsgame-12.png",
  ]
}


export default function Thesis_vrvolleyball() {

  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
