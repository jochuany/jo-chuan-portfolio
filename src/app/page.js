import Image from "next/image";
import TextType from "@/components/TextType";
import { ProjectItem } from "@/components/ProjectItem";
import { projects } from "@/components/AllProjects";

const selectedProjects = projects.filter(project => project.selected);

export default function Home() {
  return (
    <>
      <div className="flex w-screen h-auto pt-[60px] justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[80%]">

          <div className="w-full flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)] pb-10">

            <div className="text-[22px] md:text-[32px] lg:text-[36px] font-medium">
              Hello, I'm <span className="text-brand-primary font-bold">Jo-Chuan</span>.
            </div>

            <div className="flex flex-col mt-4 justify-start items-center">
              <div className="text-[14px] md:text-[18px] lg:text-[22px] font-medium mb-2 md:mb-0">
                I have experience in
              </div>

              <TextType
                text={["UI/UX Design", "Project Planning", "Frontend Development", "Digital Storytelling", "Media Psychology"]}
                typingSpeed={50}
                pauseDuration={1300}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                className="mt-2 px-4 pt-1 pb-2 rounded-md text-[22px] md:text-[32px] lg:text-[36px]
                bg-brand-primary text-brand-bg font-bold overflow-hidden justify-center"
              />

            </div>

            {/* <div className="translate-y-[180px] text-brand-graytext">
              <div className="text-[14px] md:text-[16px]">Explore</div>
              <div className="text-[26px] md:text-[30px] animate-scrolldown">⭣</div>
            </div> */}

          </div>


          <div className="flex flex-col w-full h-auto min-[1025px]:min-h-[calc(100vh-200px)] py-10">

            <div className="w-full text-start text-brand-graytext font-bold text-[16px] pb-6">
              {"// "}Selected Projects
            </div>

            <div className="w-full grid grid-cols-1 min-[1025px]:grid-cols-3 gap-10">
              {selectedProjects.map((project, index) => (
                <ProjectItem
                  key={index}
                  {...project} // 解構賦值 自動對應 props
                />
              ))}
            </div>

            <div className="w-full mt-10 flex justify-end">
              <a href="/projects" className="text-[16px] text-brand-primary font-bold transition-all duration-300 ease
              relative inline-block hover:text-brand-text group link-underline-effect">
                <span>View All Projects</span>
                <span className="inline-block ml-1 transition-all ease duration-300 lg:group-hover:translate-x-2">&#8594;</span>
              </a>
            </div>

          </div>


        </div>

      </div>

    </>
  );
}
