import React, { useContext } from "react";
import { toggleSidebar, toggleSubSidebar } from "../scripts/toggleSidebar";
import ListCars from "./ListCars";
import AddCar from "./AddCar";
import { CarsContext } from "../context/CarsContext";
import { useNavigate } from "react-router-dom";

const CarsManagementPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    showListCars,
    setShowListCars,
    showAddCars,
    setShowAddCars,
    setShowEditCars,
    successMessage,
    setSuccessMessage,
  } = useContext(CarsContext);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev: any) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("tokenBinar");
    navigate("/login");
    console.log("Logging out...");
  };

  const handleClickToggleSidebar = () => toggleSidebar();
  const handleClickToggleSidebarDashboard = () =>
    toggleSubSidebar("sidebar__dashboard", "sidebar__cars");
  const handleClickToggleSidebarCars = () =>
    toggleSubSidebar("sidebar__cars", "sidebar__dashboard");

  const handleClickListCar = () => {
    setSuccessMessage("");
    setShowAddCars(false);
    setShowEditCars(false);
    setShowListCars(true);
    console.log(showAddCars);
    console.log(showListCars);
  };

  return (
    <div>
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
      <div
        id="sidebar__cars"
        className="bg-white w-[220px] ml-[70px] h-screen fixed top-0 left-0 flex flex-col hidden"
      >
        <span className="bg-darkblue-01 w-[100px] h-[34px] m-4"></span>
        <div className="mt-8">
          <span className="px-4 py-2 font-bold text-sm text-neutral-03">
            CARS
          </span>
          <button
            id="btn__list-car"
            className="px-4 py-2 mt-4 w-full hover:bg-darkblue-01 cursor-pointer text-left"
            onClick={handleClickListCar}
          >
            <span className="font-bold text-sm text-neutral-05">List Car</span>
          </button>
        </div>
      </div>
      <div id="main-content" className="transition-width">
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
        <div id="main-content__area" className="px-6 py-8 h-full">
          {successMessage && (
            <div className="relative">
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 ${
                  successMessage === "Car added successfully!" ||
                  successMessage === "Car updated successfully!"
                    ? "bg-alrt-green"
                    : "bg-neutral-05"
                } text-white py-4 px-6 mb-6 w-auto inline-block`}
              >
                {successMessage}
              </div>
            </div>
          )}
          {showListCars ? <ListCars /> : <></>}
          {showAddCars ? <AddCar /> : <></>}
        </div>
      </div>
    </div>
  );
};

export default CarsManagementPage;
