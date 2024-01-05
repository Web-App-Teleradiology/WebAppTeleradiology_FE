import { useAuth } from "../middleware/Contexts";

export function TopBar() {
  const { authUser } = useAuth();
  let user = "";
  {
    authUser !== null && (user = JSON.parse(authUser).names);
  }
  const initials: string = user
    .split(" ")
    .map((element) => [...element][0])
    .join("")
    .toUpperCase();
  return (
    <header className="relative z-10 h-16 w-full items-center bg-white shadow md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center justify-end pl-1 sm:ml-0 sm:pr-2">
          <div className="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0">
            <a href="#" className="relative block">
              {
                <p className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 object-cover font-bold text-white ">
                  {initials}
                </p>
              }
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
