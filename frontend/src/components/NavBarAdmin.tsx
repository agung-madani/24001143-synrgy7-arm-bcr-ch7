import "../index.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toggleSidebar } from "../scripts/toggleSidebar";
import { CarsContext } from "../context/CarsContext";
import SidebarSection from "./SidebarSection";
import DashboardSidebarSection from "./DashboardSidebarSection";
import CarsSidebarSection from "./CarsSidebarSection";

const NavBarAdmin = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(CarsContext);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev: boolean) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("tokenBinar");
    navigate("/login");
    console.log("Logging out...");
  };

  const handleClickToggleSidebar = () => toggleSidebar();
  return (
    <>
      {/* Sidebar */}
      <SidebarSection />
      {/* Dashboard Sidebar */}
      <DashboardSidebarSection />
      {/* Cars Sidebar */}
      <CarsSidebarSection />
      {/* Main Content */}
      <nav className="bg-white shadow-md w-full h-[70px]">
        <div className="flex justify-between items-center h-full px-6 py-2">
          <button
            id="toggle-sidebar"
            className="bi bi-list text-2xl cursor-pointer"
            onClick={handleClickToggleSidebar}
          ></button>

          <div className="flex items-center">
            <div className="relative flex items-center">
              <i className="absolute left-2 bi bi-search text-xl text-gray-300"></i>
              <input
                className="border border-neutral-02 text-neutral-02 py-2 pl-10 pr-3 text-sm font-bold outline-none rounded-sm"
                type="search"
                id="search-input"
                placeholder="Search"
              />
            </div>
            <button className="border border-darkblue-04 text-darkblue-04 py-2 px-3 text-sm font-bold me-4 rounded-sm">
              Search
            </button>
            <div className="relative">
              <button
                className="bg-white border-none flex items-center gap-2"
                onClick={toggleDropdown}
              >
                <img src="./vite.svg" alt="Profile" />
                <span>Agung Madani</span>
                <i
                  className={`bi bi-chevron-${
                    isDropdownOpen ? "up" : "down"
                  } text-2xl`}
                ></i>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarAdmin;
