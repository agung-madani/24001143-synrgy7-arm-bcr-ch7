import "../index.css";
import { CarsContext } from "../context/CarsContext";
import { useContext } from "react";

const CarsSidebarSection = () => {
  const {
    showListCars,
    setShowListCars,
    showAddCars,
    setShowAddCars,
    setShowEditCars,
    setSuccessMessage,
  } = useContext(CarsContext);
  const handleClickListCar = () => {
    setSuccessMessage("");
    setShowAddCars(false);
    setShowEditCars(false);
    setShowListCars(true);
    console.log(showAddCars);
    console.log(showListCars);
  };
  return (
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
  );
};

export default CarsSidebarSection;
