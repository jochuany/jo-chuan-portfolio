import Image from "next/image";
import TextType from "@/components/TextType";


export default function Home() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-130px)] justify-center items-center text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] mb-6">

          <div className="w-full text-[48px] md:text-[64px] font-black">
            Hello, <br />I'm Jo-Chuan.
          </div>

          <div className="flex flex-col mt-4 md:flex-row justify-center items-start md:justify-start md:items-center">
            <div className="text-[22px] md:text-[28px] font-black mb-2 md:mb-0">
              I have experience in
            </div>

            <TextType
              text={["Digital Storytelling", "UI/UX Design", "Frontend Development", "Media Psychology"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              className="md:ml-4 px-4 pt-1 pb-2 text-[28px] md:text-[40px] bg-brand-text text-brand-bg font-black overflow-hidden justify-center"
            />

          </div>

          <div>
            <div className="text-[16px] font-medium leading-8 md:leading-8 my-8">
              會設計、也懂一點程式語言；對新科技有濃厚興趣，也樂於自學技術。<br />期望透過數位設計對社會有所貢獻。
            </div>

            <a href="/projects" className="text-[16px] font-medium border border-brand-text px-4 pt-2 pb-2.5
            hover:bg-brand-text hover:text-brand-bg transition-all duration-300 ease">
              View Projects &#8594;
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
