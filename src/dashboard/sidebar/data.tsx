import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

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
        title: "Projects",
        icon: <ProjectIcon />,
        link: "projects",
      },
      {
        title: "My tasks",
        icon: <TaskIcon />,
        link: "tasks",
      },
      {
        title: "Calendar",
        icon: <CalendarIcon />,
        link: "calendar",
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
      {
        title: "testing",
        icon: <DocIcon />,
        link: "testing",
      },
    ],
  },
];
