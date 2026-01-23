import Image from "next/image";
import TextType from "@/components/TextType";


export default function Home() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-130px)] justify-center items-center bg-brand-bg">

        <div className="flex flex-col w-[70%] mb-12">

          <div className="w-full text-[32px] md:text-[48px] font-medium">
            Hello, I'm <span className="text-brand-secondary font-bold">Jo-Chuan</span>.
          </div>

          <div className="flex flex-col mt-4 justify-start items-start">
            <div className="text-[22px] md:text-[28px] font-medium mb-2 md:mb-0">
              I have experience in
            </div>

            <TextType
              text={["Digital Storytelling", "UI/UX Design", "Frontend Development", "Media Psychology"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              cursorBlinkDuration={0.5}
              className="mt-2 px-4 pt-1 pb-2 text-[28px] md:text-[40px] bg-brand-primary text-brand-bg font-bold overflow-hidden justify-center"
            />

          </div>

          <div className="mt-10">
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
