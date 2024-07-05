import { useContext, useEffect } from "react";
import "../index.css";
import { CarsContext, CarData } from "../context/CarsContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const MainContentEditArea = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    updateCar,
    setSuccessMessage,
    setShowListCars,
    setShowAddCars,
    setShowEditCars,
    previewImage,
    setPreviewImage,
  } = useContext(CarsContext);

  const { register, handleSubmit, setValue } = useForm<CarData>();

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
          if (Object.prototype.hasOwnProperty.call(car, key)) {
            console.log(key, car[key]);
            if (key === "availableAt") {
              // Format date without time part
              const formattedDate = car[key].split("T")[0];
              setValue(key as keyof CarData, formattedDate); // Type assertion here
            } else if (key === "options" || key === "specs") {
              // Handle arrays by converting to JSON string before setting value
              // Function to process each string
              const result = car[key].map((str: string) => {
                // Remove extra quotes and split by comma
                const cleaned = str.replace(/"/g, "").split(",");
                // Join elements with comma
                return cleaned.join(",");
              });

              // Join all results with comma
              const finalResult = result.join(",");
              console.log(finalResult);
              setValue(key as keyof CarData, finalResult);
            } else {
              setValue(key as keyof CarData, car[key]);
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

  const onSubmit = async (data: CarData) => {
    try {
      console.log(data);
      const formData = new FormData();
      formData.append("plate", data.plate);
      formData.append("manufacture", data.manufacture);
      formData.append("model", data.model);
      formData.append("rentPerDay", data.rentPerDay.toString());
      formData.append("capacity", data.capacity.toString());
      formData.append("description", data.description);
      if (data.availableAt)
        formData.append("availableAt", data.availableAt.toString());
      formData.append("transmission", data.transmission);
      formData.append("available", data.available.toString());
      formData.append("type", data.type);
      formData.append("year", data.year.toString());
      formData.append("options", JSON.stringify(data.options));
      formData.append("specs", JSON.stringify(data.specs));
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

  const bakHandle = () => {
    setShowListCars(true);
    navigate("/cars-management");
  };

  return (
    <div id="main-content__area" className="px-6 py-8 h-full">
      <div id="main-content__path">
        <div className="text-xs mb-6">
          <span className="font-bold">{"Cars >"}</span>
          <span className="font-bold">{" List Car >"}</span>
          <span className="font-normal"> Edit Car</span>
        </div>
      </div>
      <div className="my-5">
        <button
          className="bg-darkblue-03 hover:bg-darkblue-04 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={bakHandle}
        >
          Back
        </button>
      </div>
      <div className="m-5">
        <h4 className="mb-4">Edit Car</h4>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="plate">
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
              <label className="block text-sm font-bold mb-2" htmlFor="model">
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
              <label className="block text-sm font-bold mb-2" htmlFor="type">
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
              <label className="block text-sm font-bold mb-2" htmlFor="year">
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
              <label className="block text-sm font-bold mb-2" htmlFor="options">
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
              <label className="block text-sm font-bold mb-2" htmlFor="specs">
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
              <label className="block text-sm font-bold mb-2" htmlFor="image">
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
                    setValue("image", file); // Set file object directly
                  }
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
  );
};

export default MainContentEditArea;
