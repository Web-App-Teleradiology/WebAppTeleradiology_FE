import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "./icons/HomeIcon";
import { data } from "./data";
import { useAuth } from "../../middleware/Contexts";

const style = {
  title: "font-normal mx-4 text-sm",
  active: "text-black font-medium",
  inactive: "text-gray-600",
  link: "flex font-thin items-center justify-start my-2 p-4 w-full",
};

export function SidebarItems() {
  const { logout, authUser } = useAuth();
  const { pathname } = useLocation();

  //getting role from auth user
  let role: string;
  {
    authUser !== null && (role = JSON.parse(authUser).role);
  }

  //filtering sidebar items according to roles of user who are logged in
  const items = [
    {
      ...data[0],
      content: data[0].content.filter((item) => item?.role.includes(role)),
    },
  ];
  return (
    <div>
      {items.map(({ section, content }) => (
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
            <Link to="/">
              <button className={style.link} onClick={logout}>
                <span>{<HomeIcon />}</span>
                <span className={style.title}>Logout</span>
              </button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
