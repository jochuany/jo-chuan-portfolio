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
              個人專案，以現有視覺靈感發掘平台 Pinterest 為參考。完成使用者調查與訪談，從受訪者的操作過程中，確認其痛點與期望解方，並初步訂定產品需求與商業模式，最後製作出 Flow chart、Wire flow 與 Prototype。
            </div>
            <a href="https://www.figma.com/design/hrJbWzRWhuwEiSAa2Qg7jn/AHA?node-id=305-233&t=3N23Bhb5J4ErT9Ib-1" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              View on Figma &#x2197;
            </a>
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
