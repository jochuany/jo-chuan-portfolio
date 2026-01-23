import Image from "next/image";

export default function Aha() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            A HA~
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
                2024
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
              以現有產品 Pinterest 為參考，在實際觀察使用者的操作後，發現其在有明確目標時「搜尋過程繁瑣耗時」的痛點，基於此設計產品新功能與商業模式。
              在演算法推薦的基礎功能下，規劃導入 AI 搜尋與進階篩選功能，旨在為內容創作、行銷企劃從業者創造更有搜尋效率的視覺靈感發掘平台。
            </div>
            <a href="https://www.figma.com/design/hrJbWzRWhuwEiSAa2Qg7jn/AHA?node-id=305-233&t=3N23Bhb5J4ErT9Ib-1" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              View on Figma &#x2197;
            </a>
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              在此獨立專案中，我完成了<br />
              <ul className="list-disc pl-4">
                <li><strong>使用者調查與訪談，確認痛點與解方：</strong>發布調查問卷，初步了解使用產品時面臨的問題；根據調查資料設計訪談方向，訪談 2 名行銷企劃從業者、並觀察他們的操作過程，確立「搜尋過程繁瑣耗時」的痛點，以此發現來規劃新功能。</li>
                <li><strong>訂定產品需求與商業模式：</strong>根據使用者訪談結果分析產品需求的重要程度，決定納入 AI 指令搜尋、多圖整合搜尋、進階篩選的新功能；並針對原有功能、新功能與不同類型的使用者，初步訂定產品的商業模式。</li>
                <li><strong>Flowchart 規劃與 Prototype：</strong>規劃產品新功能的流程圖，並進一步製作 Prototype。</li>
                <li><strong>LOGO 設計、UI 介面設計：</strong>以「A HA~」感嘆詞作為產品 slogan，代表新功能幫助使用者成功找到參考圖的瞬間；使用「燈泡」作為 LOGO 形象，並在燈絲中融入 slogan 英文字。</li>
              </ul>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/aha/aha-01.png" className="w-full" />
            <img src="/images/aha/aha-02.png" className="w-full" />
            <img src="/images/aha/aha-03.png" className="w-full" />
            <img src="/images/aha/aha-04.png" className="w-full" />
            <img src="/images/aha/aha-05.png" className="w-full" />
            <img src="/images/aha/aha-06.png" className="w-full" />
            <img src="/images/aha/aha-07.png" className="w-full" />
            <img src="/images/aha/aha-08.png" className="w-full" />
            <img src="/images/aha/aha-09.png" className="w-full" />
            <img src="/images/aha/aha-10.png" className="w-full" />
            <img src="/images/aha/aha-11.png" className="w-full" />
            <img src="/images/aha/aha-12.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
