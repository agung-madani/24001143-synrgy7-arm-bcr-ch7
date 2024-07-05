import "../index.css";
import { useContext } from "react";
import ListCars from "./ListCars";
import AddCar from "./AddCar";
import { CarsContext } from "../context/CarsContext";

const MainContentArea = () => {
  const { showListCars, showAddCars, successMessage } = useContext(CarsContext);
  return (
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
  );
};

export default MainContentArea;
