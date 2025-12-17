import Image from "next/image";

export default function Boat() {
  return (
    <>
      <div className="flex w-screen h-auto pt-10 pb-10 justify-center items-start text-[#1a2690] bg-[#f2efdf]">

        <div className="flex flex-col w-[90%] justify-between">



          <div className="text-[24px] font-bold mb-6 md:text-[26px]">
            〈船〉歌詞 MV
          </div>

          <div className="flex flex-col w-full mb-6 md:flex-row md:justify-between text-[14px] md:text-[16px]">

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TYPE
              </div>
              <div className="font-bold">
                動畫
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                YEAR
              </div>
              <div className="font-bold">
                2022
              </div>
            </div>

            <div className="mb-4 md:w-[30%]">
              <div className="font-medium">
                TOOL
              </div>
              <div className="font-bold">
                Adobe Illustrator / Adobe After Effects
              </div>
            </div>

          </div>

          <div className="w-full flex flex-col">
            <div className="md:w-[65%] text-justify text-[14px] mb-6 leading-6">
              個人專案。此作品為自製歌詞動畫，將抽象的歌詞以動畫方式呈現，在腳本階段花費較多時間構思如何視覺化。考量歌曲較抒情，因此動畫節奏較緩慢，視覺設計也配合歌詞的浪漫氛圍，加入蒲公英、海邊、夕陽等元素。背景使用漸層效果，讓畫面更有層次和立體感。
            </div>
            <a href="https://youtu.be/mht2IoXIQp0?si=8IQKSslJAI8XXNi5" target="_blank"
              className="text-[14px] text-[#f2efdf] text-center mb-6 py-2 md:w-[30%]
              bg-[#1a2690] border hover:bg-[#f2efdf] hover:text-[#1a2690] hover:border-[#1a2690] transition-all duration-300 ease">
              點此看作品
            </a>
          </div>

          <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
            <img src="/images/boat/boat-01.png" className="w-full" />
            <img src="/images/boat/boat-02.png" className="w-full" />
            <img src="/images/boat/boat-03.png" className="w-full" />
            <img src="/images/boat/boat-04.png" className="w-full" />
            <img src="/images/boat/boat-05.png" className="w-full" />
          </div>

        </div>

      </div>
    </>
  );
}
