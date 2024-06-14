import "../index.css";
import { CarsContext } from "../context/CarsContext";
import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { AxiosRequestConfig } from "axios";

type FormValues = {
  plate: string;
  manufacture: string;
  model: string;
  image: FileList | null;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt: string;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string;
  specs: string;
  withDriver: boolean;
};

const AddCar = () => {
  const { addCar, setShowListCars, setShowAddCars } = useContext(CarsContext);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      plate: "",
      manufacture: "",
      model: "",
      image: null,
      rentPerDay: 0,
      capacity: 0,
      description: "",
      availableAt: "",
      transmission: "",
      available: false,
      type: "",
      year: 0,
      options: "",
      specs: "",
      withDriver: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("plate", data.plate);
    formData.append("manufacture", data.manufacture);
    formData.append("model", data.model);
    if (data.image) formData.append("image", data.image[0]);
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

    if (addCar) {
      await addCar(
        formData as AxiosRequestConfig<{ headers: { Authorization: string } }>
      );
    }
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    setShowAddCars(false);
    setShowListCars(true);
  };
  return (
    <>
      <div id="main-content__path">
        <div className="text-xs mb-6">
          <span className="font-bold">{"Cars >"}</span>
          <span className="font-bold">{" List Car >"}</span>
          <span className="font-normal"> Add New Car</span>
        </div>
      </div>
      <div className="mt-6">
        <h1 className="font-bold text-xl">Add New Car</h1>
      </div>
      <div className="flex-col mt-9 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="plate"
            control={control}
            rules={{ required: "Plate is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Plate</label>
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="manufacture"
            control={control}
            rules={{ required: "Manufacture is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Manufacture</label>
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="model"
            control={control}
            rules={{ required: "Model is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Model</label>
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="rentPerDay"
            control={control}
            rules={{ required: "Rent per day is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Rent per Day</label>
                <input
                  {...field}
                  type="number"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="capacity"
            control={control}
            rules={{ required: "Capacity is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Capacity</label>
                <input
                  {...field}
                  type="number"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  {...field}
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="availableAt"
            control={control}
            rules={{ required: "Available at is required" }}
            render={({ field }) => (
              <div>
                <label className="block mb-1">Available At</label>
                <input
                  {...field}
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}
          />
          <Controller
            name="transmission"
            control={control}
            rules={{ required: "Transmission is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Transmission</label>
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="type"
            control={control}
            rules={{ required: "Type is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Type</label>
                <input
                  {...field}
                  type="text"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="year"
            control={control}
            rules={{ required: "Year is required" }}
            render={({ field, fieldState: { error } }) => (
              <div>
                <label className="block mb-1">Year</label>
                <input
                  {...field}
                  type="number"
                  className={`w-full p-2 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded`}
                />
                {error && (
                  <span className="text-red-500 text-sm">{error.message}</span>
                )}
              </div>
            )}
          />
          <Controller
            name="options"
            control={control}
            rules={{ required: "options is required" }}
            render={({ field }) => (
              <div>
                <label className="block mb-1">Options</label>
                <input
                  {...field}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Comma-separated values"
                />
              </div>
            )}
          />
          <Controller
            name="specs"
            control={control}
            rules={{ required: "specs is required" }}
            render={({ field }) => (
              <div>
                <label className="block mb-1">Specs</label>
                <input
                  {...field}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Comma-separated values"
                />
              </div>
            )}
          />
          <div className="flex">
            <Controller
              name="available"
              control={control}
              render={({ field }) => (
                <div className="flex items-center mt-5 mr-4">
                  <input
                    {...field}
                    type="checkbox"
                    className="mr-2"
                    value={field.value ? "true" : "false"}
                  />
                  <label>Available</label>
                </div>
              )}
            />
            <Controller
              name="withDriver"
              control={control}
              render={({ field }) => (
                <div className="flex items-center mt-5">
                  <input
                    {...field}
                    type="checkbox"
                    className="mr-2"
                    value={field.value ? "true" : "false"}
                  />
                  <label>With Driver</label>
                </div>
              )}
            />
          </div>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <div className="mt-5">
                <label className="block mb-1">Image</label>
                <input
                  {...field}
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)}
                  value={undefined}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            )}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-5"
          >
            Add Car
          </button>
        </form>
      </div>
    </>
  );
};

export default AddCar;
