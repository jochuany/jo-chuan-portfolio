import Image from "next/image";

export default function Mirror() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            鏡像之境
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

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
            <div className="md:w-[65%] text-justify text-[12px] md:text-[14px] mb-6 leading-6">
              團隊合作專案。數位內容第 14 屆畢業製作專案（於華山展覽），透過 Kinect 動作捕捉裝置、鏡中反射自我的設計，描述數位世界與現實世界之間的落差。主要負責程式協作、體驗佈置，以及體驗中的酒吧場景建模。
            </div>
            <a href="https://youtu.be/wE1DucIL8D8?si=ghNpbITCJTGbBKuE" target="_blank"
              className="text-[12px] text-[#f2efdf] text-center mb-6 py-2 md:text-[14px] md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
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
