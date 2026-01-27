import Image from "next/image";
import TextType from "@/components/TextType";
import { ProjectItem } from "@/components/ProjectItem";

const projects = [
  {
    href: "/projects/chance",
    title: "Chance!!",
    category: "產品規劃",
    year: "2025",
    photo: "/images/chance/chance-01.png",
    tool: ["Figma", "Adobe Illustrator"]
  },
  {
    href: "/projects/spike",
    title: "SPIKE IT UP!!",
    category: "網頁遊戲",
    year: "2025",
    photo: "/images/spike/spike-01.png",
    tool: ["HTML", "TailwindCSS", "Next.js", "React Hooks"]
  },
  {
    href: "/projects/report",
    title: "薪租翹翹板",
    category: "專題網站",
    year: "2023",
    photo: "/images/report/report-01.png",
    tool: ["HTML", "CSS", "JavaScript", "Web Scraper"]
  },
]


export default function Home() {
  return (
    <>
      <div className="flex w-screen h-auto pt-[60px] justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[80%]">

          <div className="w-full flex flex-col items-center justify-center text-center h-[calc(100vh-60px)] pb-20">

            <div className="text-[32px] md:text-[38px] lg:text-[42px] font-medium">
              Hello, I'm <span className="text-brand-primary font-bold">Jo-Chuan</span>.
            </div>

            <div className="flex flex-col mt-4 justify-start items-center">
              <div className="text-[14px] md:text-[20px] lg:text-[24px] font-medium mb-2 md:mb-0">
                I have experience in
              </div>

              <TextType
                text={["Digital Storytelling", "UI/UX Design", "Frontend Development", "Media Psychology"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
                className="mt-2 px-4 pt-1 pb-2 rounded-md text-[22px] md:text-[30px] lg:text-[36px]
                bg-brand-primary text-brand-bg font-bold overflow-hidden justify-center"
              />

            </div>

          </div>


          <div className="flex flex-col w-full h-auto md:h-[calc(100vh-160px)] py-10">

            <div className="w-full text-start text-brand-graytext font-bold text-[16px] pb-6">
              {"// "}Selected Projects
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  {...project} // 解構賦值 自動對應 props
                />
              ))}
            </div>

            <div className="w-full mt-10 flex justify-end">
              <a href="/projects" className="text-[16px] text-brand-primary font-bold transition-all duration-300 ease
              relative inline-block

              after:content-[''] 
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:w-full
              after:bg-brand-primary
      
              after:scale-x-100
              after:origin-right

              after:transition-transform
              after:duration-300
              after:ease-out

              md:hover:after:scale-x-0">
                View All Projects &#8594;
              </a>
            </div>

          </div>


        </div>

      </div>

    </>
  );
}
