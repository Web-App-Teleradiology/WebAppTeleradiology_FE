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
      },
      {
        title: "Radiologist",
        icon: <ProjectIcon />,
        link: "radiologist",
      },
      {
        title: "Specialist",
        icon: <TaskIcon />,
        link: "specialist",
      },

      {
        title: "Reports",
        icon: <ReportIcon />,
        link: "reports",
      },
      {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "settings",
      },
      {
        title: "Documentation",
        icon: <DocIcon />,
        link: "documentation",
      },
    ],
  },
];
