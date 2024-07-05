import "../index.css";
import { useNavigate } from "react-router-dom";

const SewaMobilSection = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/cars");
  };
  return (
    <section className="p-6 lg:pb-100" id="sewa-mobil-section">
      <div className="container max-w-6xl mx-auto bg-darkblue-04 text-white h-[400px] mobile:h-[326px] rounded-[13px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-6 font-bold text-2xl w-3/5 mobile:w-full mobile:text-4xl mx-auto">
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
          <p className="mb-12 font-light text-sm w-3/5 mx-auto">
            Sewa Mobil di (Lokasimu) Sekarang dan jelajahi destinasi impianmu
            tanpa khawatir transportasi!
          </p>
          <button onClick={handleButtonClick} className="btn-green">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
    </section>
  );
};

export default SewaMobilSection;
