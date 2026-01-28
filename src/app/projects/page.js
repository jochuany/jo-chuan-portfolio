"use client";

import Image from "next/image";
import { ProjectItem } from "@/components/ProjectItem";
import { projects } from "@/components/AllProjects";
import { useState } from "react";

const filterOrder = [
  "All",
  "UI/UX",
  "Frontend",
  "Thesis",
  "Motion Graphics",
  "Visual Design",
  "Games"
];

export default function Projects() {

  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = filterOrder.filter(filt =>
    filt === "All" || projects.some(p => p.filter === filt)
  );

  const filteredProjects = selectedFilter === "All" ? projects : projects.filter((project) => project.filter === selectedFilter);

  return (
    <>
      <div className="flex w-screen h-auto mt-[60px] py-10 justify-center items-start text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[80%]">

          <div className="flex font-bold mb-6 text-[16px] text-brand-graytext">
            {"// "}All projects
          </div>

          <div className="flex flex-wrap gap-4 mb-6 items-center text-[14px]">
            <div className="font-bold text-brand-graytext">Filter:</div>
            {filters.map((item) => (
              <div
                key={item}
                onClick={() => setSelectedFilter(item)}
                className={`transition-all duration-300 ease cursor-pointer hover:opacity-60
                  ${selectedFilter === item ? "text-brand-primary font-bold underline underline-offset-2" : "text-brand-graytext"}`}>
                {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
