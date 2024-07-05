import { useEffect } from "react";
import "../index.css";
import slider from "../scripts/slider";

const TestimonialSection = () => {
  useEffect(() => {
    // Initialize the slider
    slider();
  }, []);
  return (
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
                &quot;Binar Car Rental adalah pilihan utama saya untuk sewa
                mobil. Layanan pelanggan mereka luar biasa dan mobil-mobilnya
                selalu dalam kondisi prima. Sangat direkomendasikan!&quot;
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
                &quot;Saya cukup puas dengan pengalaman menyewa mobil di Binar
                Car Rental. Prosesnya cepat dan mudah, dan mobil yang saya sewa
                sangat nyaman untuk perjalanan jarak jauh.&quot;
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
                &quot;Binar Car Rental memberikan layanan yang sangat
                profesional. Mobil yang saya sewa bersih dan terawat dengan
                baik. Harganya juga cukup terjangkau. Pasti akan kembali
                lagi.&quot;
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
                &quot;Meskipun pelayanannya cukup baik, saya merasa harga sewa
                mobil di Binar Car Rental sedikit lebih tinggi dibandingkan
                dengan tempat lain di sekitar. Tetapi secara keseluruhan,
                pengalaman saya tetap memuaskan.&quot;
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
                &quot;Binar Car Rental adalah tempat terbaik untuk menyewa mobil
                di kota ini. Stafnya ramah dan membantu, mobilnya modern dan
                bersih, dan prosesnya sangat efisien. Sangat direkomendasikan
                untuk siapa pun yang membutuhkan mobil sewaan.&quot;
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
  );
};

export default TestimonialSection;
