import "../index.css";

const DashboardSidebarSection = () => {
  return (
    <div
      id="sidebar__dashboard"
      className="bg-white w-[220px] ml-[70px] h-screen fixed top-0 left-0 flex flex-col hidden"
    >
      <span className="bg-darkblue-01 w-[100px] h-[34px] m-4"></span>
      <div className="mt-8">
        <span className="px-4 py-2 font-bold text-sm text-neutral-03">
          DASHBOARD
        </span>
        <div className="px-4 py-2 mt-4 w-full hover:bg-darkblue-01 cursor-pointer">
          <span className="font-bold text-sm text-neutral-05">Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebarSection;
