import Image from "next/image";
import { ProjectItem } from "@/components/ProjectItem";
import { projects } from "@/components/AllProjects";

export default function Projects() {
  return (
    <>
      <div className="flex w-screen h-auto mt-[60px] py-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[80%]">

          <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
            {"// "}All projects
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                {...project} // 解構賦值 自動對應 props
              />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
