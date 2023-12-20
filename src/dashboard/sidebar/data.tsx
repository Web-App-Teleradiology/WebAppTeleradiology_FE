import { HomeIcon } from "./icons/HomeIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { Sicon } from "./icons/Sicon";
import { Ricon } from "./icons/Ricon";

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
        title: "Patients",
        icon: <Ricon />,
        link: "radiologist",
        role: ["admin", "radiologist"],
      },
      {
        title: "Patients",
        icon: <Sicon />,
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
