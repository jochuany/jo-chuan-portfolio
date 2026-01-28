// 依照 href 抓取該專案預覽圖所需的資料

import { projects } from "@/components/AllProjects";

export const useProject = (path) => {
    const projectInfo = projects.find((p) => p.href === path);

    if (!projectInfo) {
        console.error(`Project with path "${path}" not found.`);
        return null;
    }

    return {
        explore: projectInfo.explore,
        title: projectInfo.title,
        category: projectInfo.category,
        year: projectInfo.year,
        tools: projectInfo.tools,
    };
};