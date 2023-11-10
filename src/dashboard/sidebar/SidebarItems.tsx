import { Link, useLocation } from "react-router-dom";
import { data } from "./data";
import { useAuth } from "../../middleware/Contexts";
const style = {
  title: "font-normal mx-4 text-sm",
  active: "text-black font-medium",
  inactive: "text-gray-600",
  link: "flex font-thin items-center justify-start my-2 p-4 w-full",
};

export function SidebarItems() {
  const { logout } = useAuth();
  const { pathname } = useLocation();
  return (
    <div>
      {data.map(({ section, content }) => (
        <ul className="border-b py-2 last:border-none" key={section}>
          {content.map((item) => (
            <li key={item.title}>
              <Link to={item.link}>
                <span
                  className={`${style.link} 
                    ${item.link === pathname ? style.active : style.inactive}`}
                >
                  <span>{item.icon}</span>
                  <span className={style.title}>{item.title}</span>
                </span>
              </Link>
            </li>
          ))}
          <li>
            <button className={style.link} onClick={logout}>
              {/* <span>{item.icon}</span> */}
              <span className={style.title}>Logout</span>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
