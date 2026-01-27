"use client";
import Image from "next/image";
import { ProjectPages } from "@/components/ProjectPages";

const content =
{
  title: "坐在球場第一排：虛擬實境觀賽體驗如何影響運動觀眾的進場意圖",
  category: "碩士論文",
  year: "2025",
  tools: ["Meta Quest 3", "Insta360 X5", "Insta360 Studio", "SPSS"],
  introduction: "",
  cta: "View Summary \u2197",
  link: "http://thesis.lib.nccu.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dallcdr&s=id=%22G0112464036%22.&searchmode=basic",
  details: [
    {
      subtitle: "研究問題定義與文獻回顧：",
      description: ""
    },
    {
      subtitle: "實驗設計與執行：",
      description: ""
    },
    {
      subtitle: "統計分析：",
      description: ""
    },
    {
      subtitle: "研究問題回應與結論：",
      description: ""
    }
  ],
  photos: [
    "/images/aha/aha-01.png",
    "/images/aha/aha-02.png",
    "/images/aha/aha-03.png",
    "/images/aha/aha-04.png",
    "/images/aha/aha-05.png",
    "/images/aha/aha-06.png",
    "/images/aha/aha-07.png",
    "/images/aha/aha-08.png",
    "/images/aha/aha-09.png",
    "/images/aha/aha-10.png",
    "/images/aha/aha-11.png",
    "/images/aha/aha-12.png",
  ]
}


export default function Thesis() {

  return (
    <>
      <ProjectPages {...content} />
    </>
  );
}
