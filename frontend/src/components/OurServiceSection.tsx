import "../index.css";

const OurServiceSection = () => {
  return (
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
                Sewa mobil di Lokasimu bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ol className="font-light text-sm pt-3">
                <li className="inline-flex">
                  <i className="bi bi-check mr-4 "></i>Sewa Mobil Dengan Suupir
                  di Bali 12 Jam
                </li>
                <li className="inline-flex">
                  <i className="bi bi-check mr-4"></i>Sewa Mobil Lepas Kunci di
                  Bali 24 Jam
                </li>
                <li className="inline-flex">
                  <i className="bi bi-check mr-4"></i>Sewa Mobil Jangka Panjang
                  Bulanan
                </li>
                <li className="inline-flex">
                  <i className="bi bi-check mr-4"></i>Gratis Antar - Jemput
                  Mobil di Bandara
                </li>
                <li className="inline-flex">
                  <i className="bi bi-check mr-4"></i>Layanan Airport Transfer /
                  Drop In Out
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceSection;
