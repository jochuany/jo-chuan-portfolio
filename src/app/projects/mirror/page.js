import Image from "next/image";

export default function Mirror() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            鏡像之境
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[16px] md:text-[18px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                互動體驗
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2023
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Unity C# / Blender
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[16px] mb-6 leading-8">
              團隊合作專案。數位內容第 14 屆畢業製作專案。透過 Kinect 動作捕捉裝置、單面鏡中反射自我的設計，描述數位世界與現實世界之間的落差。主要負責程式協作、體驗佈置，以及體驗中的酒吧場景建模。<br /><br />
              作品完成後在華山文創園區烏梅劇院進行為期五天的展覽，有許多校內校外人士前來觀展，我們亦設計體驗流程，包括介紹、講解、輔助教學等，帶領觀展者體驗我們的作品。
            </div>
            <a href="https://youtu.be/wE1DucIL8D8?si=ghNpbITCJTGbBKuE" target="_blank"
              className="text-[16px] text-brand-bg text-center mb-6 py-2 md:w-[30%]
              bg-brand-text border hover:bg-brand-bg hover:text-brand-text hover:border-brand-text transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/mirror/mirror-01.png" className="w-full" />
            <img src="/images/mirror/mirror-02.png" className="w-full" />
            <img src="/images/mirror/mirror-03.png" className="w-full" />
            <img src="/images/mirror/mirror-04.png" className="w-full" />
            <img src="/images/mirror/mirror-05.png" className="w-full" />
            <img src="/images/mirror/mirror-06.png" className="w-full" />
            <img src="/images/mirror/mirror-07.png" className="w-full" />
            <img src="/images/mirror/mirror-09.jpg" className="w-full" />
            <img src="/images/mirror/mirror-08.jpg" className="w-full" />
            <img src="/images/mirror/mirror-10.jpg" className="w-full" />
            <img src="/images/mirror/mirror-11.jpg" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
