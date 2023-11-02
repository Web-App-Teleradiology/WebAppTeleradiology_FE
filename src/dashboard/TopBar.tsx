export function TopBar() {
  return (
    <header className="relative z-10 h-16 w-full items-center bg-white shadow md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center justify-end pl-1 sm:ml-0 sm:pr-2">
          <div className="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0">
            <a href="#" className="relative block">
              <img
                alt="Guillermo Rauch"
                src="/images/karera.jpeg"
                className="mx-auto h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
