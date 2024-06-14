import React, { useEffect } from "react";
import "../index.css";
import slider from "../scripts/slider";
import toggleAccordion from "../scripts/accordion";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Initialize the slider
    slider();

    // Add event listeners for accordions
    const accordionButtons = document.querySelectorAll(".accordion-header");
    const handleAccordionClick = (button: HTMLElement) => {
      toggleAccordion(button);
    };
    accordionButtons.forEach((button) => {
      button.addEventListener("click", () =>
        handleAccordionClick(button as HTMLElement)
      );
    });

    // Cleanup event listeners on component unmount
    return () => {
      accordionButtons.forEach((button) => {
        button.removeEventListener("click", () =>
          handleAccordionClick(button as HTMLElement)
        );
      });
    };
  }, []);

  const handleButtonClick = () => {
    navigate("/cars");
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
              <p className="font-bold text-4xl max-w-[568px] mb-5">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </p>
              <p className="text-sm font-light max-w-[463px] mb-5">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <button onClick={handleButtonClick} className="btn-green">
                Mulai Sewa Mobil
              </button>
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

      <main>
        <section className="our-services-section p-6" id="our-services-section">
          <div className="container max-w-6xl mx-auto mt-6">
            <div className="md:flex">
              <div className="mt-12 md:w-1/2 m-auto">
                <div className="md:px-12">
                  <img src="./images/img_service.png" alt="" className="" />
                </div>
              </div>
              <div className="mt-6 md:w-1/2 m-auto">
                <div className="md:py-12 md:px-6">
                  <h3 className="text-2xl font-bold items-center mb-5">
                    Best Car Rental for any kind of trip in (Lokasimu)!
                  </h3>
                  <p className="font-light text-sm py-2">
                    Sewa mobil di Lokasimu bersama Binar Car Rental jaminan
                    harga lebih murah dibandingkan yang lain, kondisi mobil
                    baru, serta kualitas pelayanan terbaik untuk perjalanan
                    wisata, bisnis, wedding, meeting, dll.
                  </p>
                  <ol className="font-light text-sm pt-3">
                    <li className="inline-flex">
                      <i className="bi bi-check mr-4 "></i>Sewa Mobil Dengan
                      Suupir di Bali 12 Jam
                    </li>
                    <li className="inline-flex">
                      <i className="bi bi-check mr-4"></i>Sewa Mobil Lepas Kunci
                      di Bali 24 Jam
                    </li>
                    <li className="inline-flex">
                      <i className="bi bi-check mr-4"></i>Sewa Mobil Jangka
                      Panjang Bulanan
                    </li>
                    <li className="inline-flex">
                      <i className="bi bi-check mr-4"></i>Gratis Antar - Jemput
                      Mobil di Bandara
                    </li>
                    <li className="inline-flex">
                      <i className="bi bi-check mr-4"></i>Layanan Airport
                      Transfer / Drop In Out
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-us-section p-6 lg:pb-100" id="why-us-section">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-center md:text-start text-2xl font-bold mb-4">
              <span>Why Us?</span>
            </h2>
            <p className="text-center md:text-start text-sm font-light mb-6">
              Mengapa harus pilih Binar Car Rental?
            </p>
            <div className="md:flex gap-6">
              <div className="md:w-1/4">
                <div className="p-6 mb-4 md:mb-0 md:p-4 border-solid border-2 rounded-lg h-48 overflow-auto">
                  <i className="bi bi-hand-thumbs-up bg-alrt-yellow"></i>
                  <p className="text-base font-bold py-4">Mobil Lengkap</p>
                  <p className="text-sm font-light">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih,
                    dan terawat.
                  </p>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="p-6 mb-4 md:mb-0 md:p-4 border-solid border-2 rounded-lg h-48 overflow-auto">
                  <i className="bi bi-tag bg-alrt-red"></i>
                  <p className="text-base font-bold py-4">Harga Murah</p>
                  <p className="text-sm font-light">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain.
                  </p>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="p-6 mb-4 md:mb-0 md:p-4 border-solid border-2 rounded-lg h-48 overflow-auto">
                  <i className="bi bi-clock bg-darkblue-04"></i>
                  <p className="text-base font-bold py-4">Layanan 24 Jam</p>
                  <p className="text-sm font-light">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu.
                  </p>
                </div>
              </div>
              <div className="md:w-1/4">
                <div className="p-6 mb-4 md:mb-0 md:p-4 border-solid border-2 rounded-lg h-48 overflow-auto">
                  <i className="bi bi-award bg-limegreen-04"></i>
                  <p className="text-base font-bold py-4">Sopir Profesional</p>
                  <p className="text-sm font-light">
                    Sopi yang profesional, berpengalaman, jujur, ramah, dan
                    tepat waktu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="testimonial-section p-6 lg:p-0 lg:pb-100"
          id="testimonial-section"
        >
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Testimonial</h3>
              <p className="text-sm font-light mb-6">
                Berbagai ulasan positif dari pelanggan kami.
              </p>
            </div>
          </div>
          <div className="my-slider">
            <div className="slide-wrapper">
              <div className="slide lg:flex rounded-lg">
                <div className="lg:w-1/4 m-auto flex lg:flex-none items-center justify-center me-3">
                  <img
                    src="./images/woman-1.jpeg"
                    alt=""
                    className="profile-picture"
                  />
                </div>
                <div className="lg:w-3/4 text-sm">
                  <div className="mb-6 text-center lg:text-start">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mb-4 font-light">
                    "Binar Car Rental adalah pilihan utama saya untuk sewa
                    mobil. Layanan pelanggan mereka luar biasa dan
                    mobil-mobilnya selalu dalam kondisi prima. Sangat
                    direkomendasikan!"
                  </p>
                  <p className="font-semibold">Maria S. 35, Jakarta</p>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide lg:flex rounded-lg">
                <div className="lg:w-1/4 m-auto flex lg:flex-none items-center justify-center me-3">
                  <img
                    src="./images/man-1.jpeg"
                    alt=""
                    className="profile-picture"
                  />
                </div>
                <div className="lg:w-3/4 text-sm">
                  <div className="mb-6 text-center lg:text-start">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mb-4 font-light">
                    "Saya cukup puas dengan pengalaman menyewa mobil di Binar
                    Car Rental. Prosesnya cepat dan mudah, dan mobil yang saya
                    sewa sangat nyaman untuk perjalanan jarak jauh."
                  </p>
                  <p className="font-semibold">Ahmad R. 41, Surabaya</p>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide lg:flex rounded-lg">
                <div className="lg:w-1/4 m-auto flex lg:flex-none items-center justify-center me-3">
                  <img
                    src="./images/woman-2.jpeg"
                    alt=""
                    className="profile-picture"
                  />
                </div>
                <div className="lg:w-3/4 text-sm">
                  <div className="mb-6 text-center lg:text-start">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mb-4 font-light">
                    "Binar Car Rental memberikan layanan yang sangat
                    profesional. Mobil yang saya sewa bersih dan terawat dengan
                    baik. Harganya juga cukup terjangkau. Pasti akan kembali
                    lagi."
                  </p>
                  <p className="font-semibold">Rani W. 25, Bandung</p>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide lg:flex rounded-lg">
                <div className="lg:w-1/4 m-auto flex lg:flex-none items-center justify-center me-3">
                  <img
                    src="./images/man-2.jpeg"
                    alt=""
                    className="profile-picture"
                  />
                </div>
                <div className="lg:w-3/4 text-sm">
                  <div className="mb-6 text-center lg:text-start">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mb-4 font-light">
                    "Meskipun pelayanannya cukup baik, saya merasa harga sewa
                    mobil di Binar Car Rental sedikit lebih tinggi dibandingkan
                    dengan tempat lain di sekitar. Tetapi secara keseluruhan,
                    pengalaman saya tetap memuaskan."
                  </p>
                  <p className="font-semibold">Fajar A. 32, Jakarta</p>
                </div>
              </div>
            </div>
            <div className="slide-wrapper">
              <div className="slide lg:flex rounded-lg">
                <div className="lg:w-1/4 m-auto flex lg:flex-none items-center justify-center me-3">
                  <img
                    src="./images/woman-3.jpeg"
                    alt=""
                    className="profile-picture"
                  />
                </div>
                <div className="lg:w-3/4 text-sm">
                  <div className="mb-6 text-center lg:text-start">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mb-4 font-light">
                    "Binar Car Rental adalah tempat terbaik untuk menyewa mobil
                    di kota ini. Stafnya ramah dan membantu, mobilnya modern dan
                    bersih, dan prosesnya sangat efisien. Sangat
                    direkomendasikan untuk siapa pun yang membutuhkan mobil
                    sewaan."
                  </p>
                  <p className="font-semibold">Rina M. 29, Medan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6" id="custom-control">
            <button>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </section>
        <section className="p-6 lg:pb-100" id="sewa-mobil-section">
          <div className="container max-w-6xl mx-auto bg-darkblue-04 text-white h-[400px] mobile:h-[326px] rounded-[13px] flex items-center justify-center">
            <div className="text-center">
              <h1 className="mb-6 font-bold text-2xl w-3/5 mobile:w-full mobile:text-4xl mx-auto">
                Sewa Mobil di (Lokasimu) Sekarang
              </h1>
              <p className="mb-12 font-light text-sm w-3/5 mx-auto">
                Sewa Mobil di (Lokasimu) Sekarang dan jelajahi destinasi
                impianmu tanpa khawatir transportasi!
              </p>
              <button onClick={handleButtonClick} className="btn-green">
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
        </section>
        <section className="faq-section p-6 lg:pb-100" id="faq-section">
          <div className="container max-w-6xl mx-auto">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-start">
                <h2 className="font-bold text-2xl mb-4">
                  Frequently Asked Question
                </h2>
                <p className="font-light text-sm">
                  Frequently Asked Questions (Pertanyaan yang Sering Diajukan)
                  ini berisi jawaban atas beragam pertanyaan umum yang mungkin
                  Anda miliki.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="accordion">
                  <div className="accordion-item mb-4 border rounded">
                    <button
                      className="accordion-header px-4 py-3 flex justify-between w-full"
                      onClick={(e) => toggleAccordion(e.currentTarget)}
                    >
                      <h2 className="text-light text-sm text-start">
                        Apa saja syarat yang dibutuhkan?
                      </h2>
                      <i className="bi bi-chevron-down ml-3"></i>
                    </button>
                    <div className="accordion-body hidden px-6 py-3 text-light text-sm bg-[#F1F3FF]">
                      Untuk menyewa mobil dari Binar Rental Mobil, Anda perlu
                      memiliki SIM yang masih berlaku dan kartu identitas (KTP
                      atau paspor) yang sah. Selain itu, kami juga memerlukan
                      jaminan berupa kartu kredit atau deposit tunai.
                    </div>
                  </div>
                  <div className="accordion-item mb-4 border rounded">
                    <button
                      className="accordion-header px-4 py-3 flex justify-between w-full"
                      onClick={(e) => toggleAccordion(e.currentTarget)}
                    >
                      <h2 className="text-light text-sm text-start">
                        Berapa hari minimal sewa mobil lepas kunci?
                      </h2>
                      <i className="bi bi-chevron-down ml-3"></i>
                    </button>
                    <div className="accordion-body hidden px-6 py-3 text-light text-sm bg-[#F1F3FF]">
                      Minimal sewa mobil lepas kunci adalah 1 hari.
                    </div>
                  </div>
                  <div className="accordion-item mb-4 border rounded">
                    <button
                      className="accordion-header px-4 py-3 flex justify-between w-full"
                      onClick={(e) => toggleAccordion(e.currentTarget)}
                    >
                      <h2 className="text-light text-sm text-start">
                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                      </h2>
                      <i className="bi bi-chevron-down ml-3"></i>
                    </button>
                    <div className="accordion-body hidden px-6 py-3 text-light text-sm bg-[#F1F3FF]">
                      Sebaiknya Anda melakukan booking sewa mobil minimal 3 hari
                      sebelum tanggal pengambilan mobil untuk memastikan
                      ketersediaan kendaraan.
                    </div>
                  </div>
                  <div className="accordion-item mb-4 border rounded">
                    <button
                      className="accordion-header px-4 py-3 flex justify-between w-full"
                      onClick={(e) => toggleAccordion(e.currentTarget)}
                    >
                      <h2 className="text-light text-sm text-start">
                        Apakah ada biaya antar-jemput?
                      </h2>
                      <i className="bi bi-chevron-down ml-3"></i>
                    </button>
                    <div className="accordion-body hidden px-6 py-3 text-light text-sm bg-[#F1F3FF]">
                      Ya, kami menyediakan layanan antar-jemput dengan biaya
                      tambahan. Biaya ini tergantung pada lokasi penjemputan dan
                      tujuan akhir Anda.
                    </div>
                  </div>
                  <div className="accordion-item border rounded">
                    <button
                      className="accordion-header px-4 py-3 flex justify-between w-full"
                      onClick={(e) => toggleAccordion(e.currentTarget)}
                    >
                      <h2 className="text-light text-sm text-start">
                        Bagaimana jika terjadi kecelakaan?
                      </h2>
                      <i className="bi bi-chevron-down ml-3"></i>
                    </button>
                    <div className="accordion-body hidden px-6 py-3 text-light text-sm bg-[#F1F3FF]">
                      Jika terjadi kecelakaan, segera hubungi layanan darurat
                      dan laporkan insiden tersebut kepada kami. Kami akan
                      memberikan panduan langkah-langkah selanjutnya sesuai
                      dengan kebijakan asuransi dan prosedur kami.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
