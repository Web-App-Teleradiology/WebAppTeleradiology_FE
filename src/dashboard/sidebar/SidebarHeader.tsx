export function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center bg-gray-100 py-6 pl-3 ">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-black text-lg font-medium text-white">
          T
        </div>
        <div className="font-medium">Teleradiology</div>
      </div>
    </div>
  );
}
