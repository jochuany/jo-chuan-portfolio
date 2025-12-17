import Image from "next/image";

export default function Spike() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            SPIKE IT UP!!
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                網頁遊戲
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
                Next.js / TailwindCSS / React Hooks
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[12px] md:text-[14px] mb-6 leading-6">
              個人專案，獨自完成遊戲機制設計、介面與流程規劃、程式撰寫，視覺素材由 AI 協助發想後自行製作。Next.js 為課堂中學習，React Hook 則從專案過程中自學應用。
            </div>
            <a href="https://volleyball-spiking-game.vercel.app/" target="_blank"
              className="text-[12px] text-[#f2efdf] text-center mb-6 py-2 md:text-[14px] md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/spike/spike-01.png" className="w-full" />
            <img src="/images/spike/spike-02.png" className="w-full" />
            <img src="/images/spike/spike-03.png" className="w-full" />
            <img src="/images/spike/spike-04.png" className="w-full" />
            <img src="/images/spike/spike-05.png" className="w-full" />
            <img src="/images/spike/spike-06.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
