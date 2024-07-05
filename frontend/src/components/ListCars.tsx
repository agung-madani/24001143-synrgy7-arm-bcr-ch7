import "../index.css";
import { CarsContext, Car } from "../context/CarsContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ListCars = () => {
  const navigate = useNavigate();
  const {
    cars,
    showAvailableCars,
    setShowAvailableCars,
    showUnavailableCars,
    setShowUnavailableCars,
    showDeleteConfirmation,
    setShowDeleteConfirmation,
    setCarToDelete,
    showListCars,
    setShowListCars,
    showAddCars,
    setShowAddCars,
    setSuccessMessage,
    handleDelete,
    showEditCars,
    setShowEditCars,
  } = useContext(CarsContext);

  const handleClickAddCar = () => {
    setSuccessMessage("");
    setShowAddCars(true);
    setShowEditCars(false);
    setShowListCars(false);
    console.log(showAddCars);
    console.log(showListCars);
  };

  const handleShowAllCars = () => {
    setShowAvailableCars(false);
    setShowUnavailableCars(false);
  };
  const handleShowAvailableCars = () => {
    setShowAvailableCars(true);
    setShowUnavailableCars(false);
  };
  const handleShowUnvailableCars = () => {
    setShowAvailableCars(false);
    setShowUnavailableCars(true);
  };
  const handleDeleteConfirmation = (car: Car) => {
    setCarToDelete(car);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirmation(false);
    setCarToDelete(null);
  };

  const onClickDelete = () => {
    setSuccessMessage("");
    if (handleDelete) {
      handleDelete();
    }
  };

  const handleEditPage = (id: string) => {
    setShowListCars(false);
    setShowAddCars(false);
    setShowEditCars(true);
    setSuccessMessage("");
    navigate(`/cars-management/${id}`);
    console.log(showEditCars);
    console.log(showListCars);
  };

  const filterCars = (car: { available: boolean }) => {
    if (showAvailableCars && car.available) {
      return true;
    }
    if (showUnavailableCars && !car.available) {
      return true;
    }
    if (!showAvailableCars && !showUnavailableCars) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div id="main-content__list-car" className="">
        <div
          className={`fixed inset-0 overflow-y-auto ${
            showDeleteConfirmation ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span className="hidden" aria-hidden="true">
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
              role="dialog"
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <div className="bg-white text-center">
                <div className="py-12 px-16">
                  <div className="p-6">
                    <img
                      src="./images/car_cloud.png"
                      alt="car illustration"
                      className="w-48 mx-auto"
                    />
                  </div>
                  <h3
                    className="font-bold text-base mb-4"
                    id="alert-dialog-title"
                  >
                    Menghapus Data Mobil
                  </h3>
                  <div className="w-[323px] mb-6">
                    <p
                      className="font-light text-sm"
                      id="alert-dialog-description"
                    >
                      Setelah dihapus, data mobil tidak dapat dikembalikan.
                      Yakin ingin menghapus?
                    </p>
                  </div>
                  <div className="px-4 py-3">
                    <button
                      onClick={onClickDelete}
                      type="button"
                      className="mr-4 bg-darkblue-04 py-2 px-3 w-[87px] hover:bg-darkblue-05 text-white border border-darkblue-04"
                    >
                      Yes
                    </button>
                    <button
                      onClick={handleDeleteCancel}
                      type="button"
                      className="bg-white border rounded-sm border-darkblue-04 py-2 px-3 w-[87px] text-darkblue-04 hover:bg-darkblue-01"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main-content__path">
          <div className="text-xs mb-6">
            <span className="font-bold">{"Cars >"}</span>
            <span className="font-normal"> List Car</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-xl">List Car</span>
          <button
            className="bg-darkblue-04 hover:bg-darkblue-05 rounded-sm py-2 px-3 text-white text-sm font-bold"
            onClick={handleClickAddCar}
          >
            <i className="bi bi-plus text-xl mr-1"></i>
            Add New Car
          </button>
        </div>
        <div className="flex gap-4 font-bold text-sm mt-4">
          <button
            className="hover:border-darkblue-04 hover:bg-darkblue-01 hover:text-darkblue-04 focus:border-darkblue-04 focus:bg-darkblue-01 border border-darkblue-02 focus:text-darkblue-04 text-darkblue-02 py-2 px-3 cursor-pointer"
            onClick={handleShowAllCars}
          >
            <span>All</span>
          </button>
          <button
            className="hover:border-darkblue-04 hover:bg-darkblue-01 hover:text-darkblue-04 focus:border-darkblue-04 focus:bg-darkblue-01 border border-darkblue-02 focus:text-darkblue-04 text-darkblue-02 py-2 px-3 cursor-pointer"
            onClick={handleShowAvailableCars}
          >
            <span>Available</span>
          </button>
          <button
            className="hover:border-darkblue-04 hover:bg-darkblue-01 hover:text-darkblue-04 focus:border-darkblue-04 focus:bg-darkblue-01 border border-darkblue-02 focus:text-darkblue-04 text-darkblue-02 py-2 px-3 cursor-pointer"
            onClick={handleShowUnvailableCars}
          >
            <span>Unavailable</span>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            id="cars-container"
          >
            {cars?.filter(filterCars).map((car) => (
              <div key={car.id} className="w-[333px] h-[586px] mx-auto p-6">
                <div
                  className="img-car h-[222px] w-[285px] mb-3"
                  style={{
                    background: `url(${car.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <p className="font-normal text-sm mb-3">
                  {car.manufacture} {car.model}
                </p>
                <p className="font-bold text-base mb-3">
                  Rp {car.rentPerDay} / hari
                </p>
                <p className="font-light text-sm mb-3 w-[301px] h-[60px]">
                  {car.description}
                </p>
                <ul className="mb-6">
                  <li className="font-light text-sm">
                    <i className="bi bi-people-fill mr-2"></i>
                    {car.capacity} orang
                  </li>
                  <li className="font-light text-sm">
                    <i className="bi bi-gear-fill mr-2"></i>
                    {car.transmission}
                  </li>
                  <li className="font-light text-sm">
                    <i className="bi bi-calendar mr-2"></i>Tahun {car.year}
                  </li>
                </ul>
                <button
                  className="delete-button border border-alrt-red text-alrt-red hover:bg-alrt-red hover:text-white rounded px-4 py-2 mr-5 mt-5"
                  onClick={() => handleDeleteConfirmation(car)}
                >
                  Delete
                </button>
                <button
                  className="edit-button border border-limegreen-04 text-limegreen-04 hover:bg-limegreen-04 hover:text-white rounded px-4 py-2 mt-5"
                  onClick={() => handleEditPage(car.id)}
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCars;
