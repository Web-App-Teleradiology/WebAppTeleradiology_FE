import { useDashboardContext } from "./Provider";

export function TopBar() {
  const { toggleSidebar } = useDashboardContext();
  return (
    <header className="relative z-10 h-16 w-full items-center border-b md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex w-3/4">
            <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggleSidebar}
                className="text-4xl text-black focus:outline-none"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <a href="#" className="relative block">
              <img
                alt="profile"
                src="/images/1.jpg"
                className="mx-auto h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
