import "../index.css";
import { toggleSubSidebar } from "../scripts/toggleSidebar";

const SidebarSection = () => {
  const handleClickToggleSidebarDashboard = () =>
    toggleSubSidebar("sidebar__dashboard", "sidebar__cars");
  const handleClickToggleSidebarCars = () =>
    toggleSubSidebar("sidebar__cars", "sidebar__dashboard");
  return (
    <div
      id="sidebar"
      className="bg-darkblue-04 w-[70px] h-screen fixed top-0 left-0 flex flex-col font-light text-xs text-white hidden transition-width"
    >
      <span className="bg-darkblue-01 w-8 h-8 m-4"></span>
      <button
        id="toggle-sidebar__dashboard"
        className="h-16 flex flex-col items-center justify-center hover:bg-white hover:bg-opacity-30 cursor-pointer"
        onClick={handleClickToggleSidebarDashboard}
      >
        <i className="bi bi-house-door text-2xl"></i>
        <span>Dashboard</span>
      </button>
      <button
        id="toggle-sidebar__cars"
        className="h-16 flex flex-col items-center justify-center hover:bg-white hover:bg-opacity-30 cursor-pointer"
        onClick={handleClickToggleSidebarCars}
      >
        <i className="bi bi-truck text-2xl"></i>
        <span>Cars</span>
      </button>
    </div>
  );
};

export default SidebarSection;
