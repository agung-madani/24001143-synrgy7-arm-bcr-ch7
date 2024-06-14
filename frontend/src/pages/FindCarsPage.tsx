import "../index.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { CarsContext } from "../context/CarsContext";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

const FindCarPage = () => {
  const { cars, setFilters } = useContext(CarsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    if (setFilters) {
      setFilters(data);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [cars]);

  const handleSearch = () => {
    const carsContainer = document.getElementById("cars-container");
    if (!cars || !carsContainer) return;
    if (carsContainer) {
      carsContainer.innerHTML = ""; // Clear existing content
    }

    cars.forEach((car) => {
      const card = document.createElement("div");
      card.className = "w-[333px] h-[586px] mx-auto p-6";
      card.innerHTML = `
        <div class="img-car h-[222px] w-[285px] mb-3" style="
          background: url(${car.image});
          background-size: cover;
          background-position: center;">
        </div>
        <p class="font-normal text-sm mb-3">${car.manufacture} ${car.model}</p>
        <p class="font-bold text-base mb-3">Rp ${car.rentPerDay} / hari</p>
        <p class="font-light text-sm mb-3 w-[301px] h-[60px]">${car.description}</p>
        <ul class="mb-6">
          <li class="font-ligt text-sm"><i class="bi bi-people-fill mr-2"></i>${car.capacity} orang</li>
          <li class="font-ligt text-sm"><i class="bi bi-gear-fill mr-2"></i>${car.transmission}</li>
          <li class="font-ligt text-sm"><i class="bi bi-calendar mr-2"></i>Tahun ${car.year}</li>
        </ul>
        <button class="bg-limegreen-04 w-full h-12 font-bold text-sm text-white">Pilih Mobil</button>
      `;
      if (carsContainer) {
        carsContainer.appendChild(card);
      }
    });
  };
  return (
    <div>
      <NavBar />
      <section
        className="hero-section relative p-6 lg:py-100 bg-[#F1F3FF]"
        id="hero-section"
      >
        <div className="container max-w-6xl mx-auto">
          <div className="lg:flex">
            <div className="mb-[200px] lg:mb-0">
              <p className="font-bold text-4xl mw-full max-w-[568px] mb-5">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </p>
              <p className="text-sm font-light mw-full max-w-[463px] mb-5">
                Selamat datang di Binar Car Rental. Kamis menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>

            <img
              src="./images/img_car.png"
              alt="car"
              className="block absolute right-0 bottom-0 lg:block"
              style={{ width: "50%" }}
            />
            <img
              src="./images/img_car.png"
              alt="car"
              className="hidden lg:hidden sm:block absolute right-0 bottom-0"
              style={{ width: "60%" }}
            />
            <img
              src="./images/img_car.png"
              alt="car"
              className="hidden sm:hidden mobile:block absolute right-0 bottom-0"
              style={{ width: "70%" }}
            />
            <img
              src="./images/img_car.png"
              alt="car"
              className="block lg:hidden absolute right-0 bottom-0"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </section>
      <main className="relative mb-96 lg:mb-20">
        <div className="absolute top-0 left-0 right-0 mx-auto mt-[-50px] lg:w-[1047px] px-6 lg:px-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white rounded-lg shadow-md p-6"
          >
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-xs mb-2">Tipe Driver</p>
              <select
                id="driver-type"
                className="mr-2 w-full lg:w-[210.75px] h-9 rounded px-4 py-2"
                {...register("withDriver", { required: true })}
              >
                <option value="" disabled hidden>
                  Pilih Tipe Driver
                </option>
                <option value="true">Dengan Sopir</option>
                <option value="false">Tanpa Sopir (Lepas Kunci)</option>
              </select>
              {errors.withDriver && (
                <span className="text-red-500">Tipe Driver is required</span>
              )}
            </div>

            <div className="mb-4 lg:mb-0">
              <p className="font-light text-xs mb-2">Tanggal</p>
              <input
                id="date-input"
                type="date"
                className="mr-2 w-full lg:w-[210.75px] h-9 rounded px-4 py-2"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="text-red-500">Tanggal is required</span>
              )}
            </div>

            <div className="mb-4 lg:mb-0">
              <p className="font-light text-xs mb-2">Waktu Jemput/Ambil</p>
              <select
                id="pickup-time"
                className="mr-2 w-full lg:w-[210.75px] h-9 rounded px-4 py-2"
                {...register("pickupTime", { required: true })}
              >
                <option value="" disabled hidden>
                  Pilih Waktu
                </option>
                <option value="08:00">08:00 WIB</option>
                <option value="09:00">09:00 WIB</option>
                <option value="10:00">10:00 WIB</option>
                <option value="11:00">11:00 WIB</option>
                <option value="12:00">12:00 WIB</option>
              </select>
              {errors.pickupTime && (
                <span className="text-red-500">
                  Waktu Jemput/Ambil is required
                </span>
              )}
            </div>

            <div className="mb-4 lg:mb-0">
              <p className="font-light text-xs mb-2">Jumlah Penumpang</p>
              <div className="relative">
                <input
                  id="passenger-count"
                  type="text"
                  placeholder="Jumlah Penumpang"
                  className="mr-2 w-full lg:w-[210.75px] h-9 rounded px-4 py-2"
                  {...register("passengerCount", {
                    pattern: /^[0-9]+$/,
                  })}
                />
                <div
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 bg-cover"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/wNxCLNp/icon-input-penumpang.png)",
                  }}
                ></div>
                {errors.passengerCount && (
                  <span className="text-red-500">
                    Jumlah Penumpang is required and must be a number
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="font-light text-xs mb-6"></p>
              <button
                type="submit"
                id="load-btn"
                className="bg-green-500 h-9 hover:bg-green-600 text-white rounded px-4 py-2"
              >
                Cari Mobil
              </button>
            </div>
          </form>
        </div>
      </main>

      <div className="flex items-center justify-center">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          id="cars-container"
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default FindCarPage;
