import Image from "next/image";

export default function Chance() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            CHANCE!!
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                產品規劃
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2025
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Figma
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              社群媒體上的資訊龐雜未分類、訊息格式不統一、且容易受演算法影響，排球球友找尋資訊時可能耗費大把時間。
              本專案以排球愛好者的需求為核心，旨在整合所有排球人需要的排球資訊，讓場主或比賽主辦方能清楚地上架資訊、球友也能有效率地瀏覽並找到資訊。
            </div>
            <a href="https://www.figma.com/design/o1C7w9sgoiAI7chbrAgcRF/Chance--?node-id=163-2&t=8p5JB3rs4YGvMrdl-1" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              View on Figma &#x2197;
            </a>

            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              在此獨立專案中，我完成了<br />
              <ul className="list-disc pl-4">
                <li><strong>產品定義與專案目標設定：</strong>觀察 Facebook 社團上的資訊呈現方式與活躍度，分析排球愛好者的需求與痛點，發現球友常常找不到資訊、搜尋也不一定準確，由此定義產品方向與專案目標。</li>
                <li><strong>IA、Flowchart 與 Wireframe 規劃：</strong>設定球友、球館與場主等主要受眾群，根據不同受眾角色與其主要任務，規劃資訊架構、Flowchart 與 Wireframe，擬定主要產品功能。</li>
                <li><strong>LOGO、UI 介面與 Prototytpe：</strong>以排球、黃色、藍色為主要形象，使用術語「Chance」同時符合排球運動精神與產品理念，設計出 LOGO、並將視覺風格延續至 UI 介面與 Prototype。</li>
                <li><strong>風險規劃與評估：</strong>思考產品上線可能遇到的內部與外部風險，並評估其嚴重性、影響程度與處置方式（AI 工具協助）。</li>
              </ul>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/chance/chance-01.png" className="w-full" />
            <img src="/images/chance/chance-02.png" className="w-full" />
            <img src="/images/chance/chance-03.png" className="w-full" />
            <img src="/images/chance/chance-04.png" className="w-full" />
            <img src="/images/chance/chance-05.png" className="w-full" />
            <img src="/images/chance/chance-06.png" className="w-full" />
            <img src="/images/chance/chance-07.png" className="w-full" />
            <img src="/images/chance/chance-08.png" className="w-full" />
            <img src="/images/chance/chance-09.png" className="w-full" />
            <img src="/images/chance/chance-10.png" className="w-full" />
            <img src="/images/chance/chance-11.png" className="w-full" />
            <img src="/images/chance/chance-12.png" className="w-full" />
            <img src="/images/chance/chance-13.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
