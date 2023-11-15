import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";

export const data = [
  {
    section: "Section1",
    content: [
      {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: ".",
        role: ["admin", "specialist", "radiologist"],
      },
      {
        title: "Radiologist",
        icon: <ProjectIcon />,
        link: "radiologist",
        role: ["admin", "radiologist"],
      },
      {
        title: "Specialist",
        icon: <TaskIcon />,
        link: "specialist",
        role: ["admin", "specialist"],
      },

      {
        title: "Reports",
        icon: <ReportIcon />,
        link: "reports",
        role: ["admin", "specialist", "radiologist"],
      },
      {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "settings",
        role: ["admin"],
      },
    ],
  },
];
