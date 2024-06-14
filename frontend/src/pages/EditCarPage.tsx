import { useContext, useEffect } from "react";
import "../index.css";
import { CarsContext } from "../context/CarsContext";
import { toggleSidebar, toggleSubSidebar } from "../scripts/toggleSidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const EditCarPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    updateCar,
    setSuccessMessage,
    setShowListCars,
    setShowAddCars,
    setShowEditCars,
    previewImage,
    setPreviewImage,
  } = useContext(CarsContext);

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        console.log("Fetching car data");
        const headers = localStorage.getItem("tokenBinar")
          ? {
              Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
            }
          : {};
        const response = await axios.get(`http://localhost:3030/cars/${id}`, {
          headers: headers,
        });
        const car = response.data.data;
        console.log(car);
        for (const key in car) {
          if (car.hasOwnProperty(key)) {
            if (key === "availableAt") {
              // Format date without time part
              const formattedDate = car[key].split("T")[0];
              setValue(key, formattedDate);
            } else {
              setValue(key, car[key]);
            }
          }
        }
        setPreviewImage(car.image);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, [id, setValue, setPreviewImage]);

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
    navigate("/cars-management");
  };

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
      const formData = new FormData();
      formData.append("plate", data.plate);
      formData.append("manufacture", data.manufacture);
      formData.append("model", data.model);
      formData.append("rentPerDay", data.rentPerDay.toString());
      formData.append("capacity", data.capacity.toString());
      formData.append("description", data.description);
      formData.append("availableAt", data.availableAt);
      formData.append("transmission", data.transmission);
      formData.append("available", data.available.toString());
      formData.append("type", data.type);
      formData.append("year", data.year.toString());
      formData.append("options", data.options);
      formData.append("specs", data.specs);
      formData.append("withDriver", data.withDriver.toString());
      if (data.image) formData.append("image", data.image);
      await updateCar(formData, id ?? "");
      setSuccessMessage("Car updated successfully!");
      setShowAddCars(false);
      setShowEditCars(false);
      setShowListCars(true);
      navigate("/cars-management");
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  return (
    <>
      <div>
        <div
          id="sidebar"
          className="bg-darkblue-04 w-[70px] h-screen fixed top-0 left-0 flex flex-col font-light text-xs text-white transition-width"
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
          className="bg-white w-[220px] ml-[70px] h-screen fixed top-0 left-0 flex flex-col "
        >
          <span className="bg-darkblue-01 w-[100px] h-[34px] m-4"></span>
          <div className="mt-8">
            <span className="px-4 py-2 font-bold text-sm text-neutral-03">
              DASHBOARD
            </span>
            <div className="px-4 py-2 mt-4 w-full hover:bg-darkblue-01 cursor-pointer">
              <span className="font-bold text-sm text-neutral-05">
                Dashboard
              </span>
            </div>
          </div>
        </div>
        <div
          id="sidebar__cars"
          className="bg-white w-[220px] ml-[70px] h-screen fixed top-0 left-0 flex flex-col "
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
              <span className="font-bold text-sm text-neutral-05">
                List Car
              </span>
            </button>
          </div>
        </div>
        <div id="main-content" className="transition-width ml-[290px]">
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
                    <img src="../vite.svg" alt="Profile" />
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
            <div id="main-content__path">
              <div className="text-xs mb-6">
                <span className="font-bold">{"Cars >"}</span>
                <span className="font-bold">{" List Car >"}</span>
                <span className="font-normal"> Edit Car</span>
              </div>
            </div>
            <div className="m-5">
              <h4 className="mb-4">Edit Car</h4>
              <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="plate"
                    >
                      Plate
                    </label>
                    <input
                      id="plate"
                      type="text"
                      {...register("plate")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="manufacture"
                    >
                      Manufacture
                    </label>
                    <input
                      id="manufacture"
                      type="text"
                      {...register("manufacture")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="model"
                    >
                      Model
                    </label>
                    <input
                      id="model"
                      type="text"
                      {...register("model")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="rentPerDay"
                    >
                      Rent Per Day
                    </label>
                    <input
                      id="rentPerDay"
                      type="number"
                      {...register("rentPerDay")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="capacity"
                    >
                      Capacity
                    </label>
                    <input
                      id="capacity"
                      type="number"
                      {...register("capacity")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <input
                      id="description"
                      type="text"
                      {...register("description")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="availableAt"
                    >
                      Available At
                    </label>
                    <input
                      id="availableAt"
                      type="date"
                      {...register("availableAt")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="transmission"
                    >
                      Transmission
                    </label>
                    <input
                      id="transmission"
                      type="text"
                      {...register("transmission")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <input
                      id="type"
                      type="text"
                      {...register("type")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="year"
                    >
                      Year
                    </label>
                    <input
                      id="year"
                      type="number"
                      {...register("year")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="options"
                    >
                      Options
                    </label>
                    <input
                      id="options"
                      type="text"
                      {...register("options")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="specs"
                    >
                      Specs
                    </label>
                    <input
                      id="specs"
                      type="text"
                      {...register("specs")}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4 flex">
                    <div className="mr-16">
                      <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="available"
                      >
                        Available
                      </label>
                      <input
                        id="available"
                        type="checkbox"
                        {...register("available")}
                        className="w-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="">
                      <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="withDriver"
                      >
                        With Driver
                      </label>
                      <input
                        id="withDriver"
                        type="checkbox"
                        {...register("withDriver")}
                        className="w-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="image"
                    >
                      Image
                    </label>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreviewImage(URL.createObjectURL(file));
                        }
                        setValue("image", file);
                      }}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  {previewImage && (
                    <div className="mb-4">
                      <label className="block text-sm font-bold mb-2">
                        Image Preview
                      </label>
                      <img
                        src={
                          previewImage.startsWith("./images")
                            ? `.${previewImage}`
                            : previewImage
                        }
                        alt="Preview"
                        className="w-full h-auto"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCarPage;
