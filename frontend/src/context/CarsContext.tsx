import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

export interface loginData {
  email: string;
  password: string;
}

export interface Car {
  id: string;
  plate: string;
  model: string;
  manufacture: string;
  image: string | null;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt: Date | null;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
  withDriver: boolean;
}

export interface CarData {
  plate: string;
  model: string;
  manufacture: string;
  image?: File | string | null;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt: Date | null;
  transmission: string;
  available: boolean;
  type: string;
  year: number;
  options: string[];
  specs: string[];
  withDriver: boolean;
}

export interface Filters {
  date?: string;
  pickupTime?: string;
  passengerCount?: number;
  withDriver?: string;
}

export interface CarsContextType {
  cars: Car[];
  setFilters?: React.Dispatch<React.SetStateAction<Filters>> | undefined;
  successMessage: string;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  addCar: (carData: FormData) => Promise<void>;
  updateCar: (formData: FormData, id: string) => Promise<void>;
  handleDelete: () => Promise<void>;
  showAvailableCars: boolean;
  setShowAvailableCars: React.Dispatch<React.SetStateAction<boolean>>;
  showUnavailableCars: boolean;
  setShowUnavailableCars: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteConfirmation: boolean;
  setShowDeleteConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  carToDelete: Car | null;
  setCarToDelete: React.Dispatch<React.SetStateAction<Car | null>>;
  showListCars: boolean;
  setShowListCars: React.Dispatch<React.SetStateAction<boolean>>;
  showAddCars: boolean;
  setShowAddCars: React.Dispatch<React.SetStateAction<boolean>>;
  showEditCars: boolean;
  setShowEditCars: React.Dispatch<React.SetStateAction<boolean>>;
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
  previewImage: string | null;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValues: CarsContextType = {
  addCar: async () => {},
  updateCar: async () => {},
  handleDelete: async () => {},
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
  showEditCars: true,
  setShowEditCars: () => {},
  showListCars: true,
  setShowListCars: () => {},
  showAddCars: true,
  setShowAddCars: () => {},
  successMessage: "",
  setSuccessMessage: () => {},
  setCars: () => {},
  previewImage: "",
  setPreviewImage: () => {},
  cars: [],
  showAvailableCars: true,
  setShowAvailableCars: () => {},
  showUnavailableCars: true,
  setShowUnavailableCars: () => {},
  showDeleteConfirmation: false,
  setShowDeleteConfirmation: () => {},
  carToDelete: null,
  setCarToDelete: () => {},
  errorMessage: "",
  setErrorMessage: () => {
    ("");
  },
};

const CarsContext = createContext<CarsContextType>(defaultValues);

const CarsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showEditCars, setShowEditCars] = useState(false);
  const [showAddCars, setShowAddCars] = useState(false);
  const [showListCars, setShowListCars] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [carToDelete, setCarToDelete] = useState<Car | null>(null);
  const [showAvailableCars, setShowAvailableCars] = useState(true);
  const [showUnavailableCars, setShowUnavailableCars] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    const { date, pickupTime, passengerCount, withDriver } = filters;
    const dateTime = new Date(`${date}T${pickupTime}`);

    const convertedPassengerCount = Number(passengerCount);
    const convertedwithDriver = withDriver === "true";

    console.log(dateTime, convertedPassengerCount, convertedwithDriver);

    axios
      .get("http://localhost:3030/cars", {
        headers: localStorage.getItem("tokenBinar")
          ? {
              Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
            }
          : {},
      })
      .then((response) => {
        console.log(response);
        const activeCars = response.data.data.filter(
          (car: {
            available: boolean;
            availableAt: typeof date;
            capacity: number;
            withDriver: boolean;
          }) =>
            car.available === true &&
            car.withDriver === convertedwithDriver &&
            car.availableAt &&
            new Date(car.availableAt) > dateTime &&
            car.capacity >= convertedPassengerCount
        );
        if (response.data.message === "All cars retrieved successfully.") {
          console.log("Halo Admin");
          console.log(response.data.data);
          setCars(response.data.data);
        } else {
          console.log("Halo User");
          setCars(activeCars);
        }
        console.log(activeCars);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [filters]);

  const addCar = async (carData: FormData) => {
    try {
      const headers = localStorage.getItem("tokenBinar")
        ? {
            Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
          }
        : {};

      await axios.post("http://localhost:3030/cars", carData, {
        headers: headers,
      });

      setSuccessMessage("Car added successfully!");

      const response = await axios.get("http://localhost:3030/cars", {
        headers: headers,
      });
      const activeCars = response.data.data;
      setCars(activeCars);
    } catch (error) {
      setSuccessMessage("");
      // Handle error
      console.error("Error adding new car:", error);
    }
  };

  const updateCar = async (formData: FormData, id: string) => {
    try {
      const headers = localStorage.getItem("tokenBinar")
        ? {
            Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
          }
        : {};

      await axios.put(`http://localhost:3030/cars/${id}`, formData, {
        headers: headers,
      });
      setSuccessMessage("Car updated successfully!");

      const response = await axios.get("http://localhost:3030/cars", {
        headers: headers,
      });
      const activeCars = response.data.data;
      setCars(activeCars);
    } catch (error) {
      console.error("Error updating car:", error);
      setSuccessMessage("");
    }
  };

  const handleDelete = async () => {
    if (carToDelete) {
      try {
        const headers = localStorage.getItem("tokenBinar")
          ? {
              Authorization: `Bearer ${localStorage.getItem("tokenBinar")}`,
            }
          : {};
        console.log(carToDelete.id);
        await axios.delete(`http://localhost:3030/cars/${carToDelete.id}`, {
          headers: headers,
        });

        setSuccessMessage("Car deleted successfully!");
        setShowDeleteConfirmation(false);
        setCarToDelete(null);

        const response = await axios.get("http://localhost:3030/cars", {
          headers: headers,
        });
        const activeCars = response.data.data;
        console.log(activeCars);
        setCars(activeCars);
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };

  return (
    <CarsContext.Provider
      value={{
        cars,
        setFilters,
        successMessage,
        setSuccessMessage,
        addCar,
        showAvailableCars,
        setShowAvailableCars,
        showUnavailableCars,
        setShowUnavailableCars,
        showDeleteConfirmation,
        setShowDeleteConfirmation,
        carToDelete,
        setCarToDelete,
        showListCars,
        setShowListCars,
        showAddCars,
        setShowAddCars,
        handleDelete,
        showEditCars,
        setShowEditCars,
        setCars,
        previewImage,
        setPreviewImage,
        updateCar,
        isDropdownOpen,
        setIsDropdownOpen,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export { CarsContext, CarsProvider };
