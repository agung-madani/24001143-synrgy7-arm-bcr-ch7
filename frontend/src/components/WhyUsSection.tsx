import "../index.css";

const WhyUsSection = () => {
  return (
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
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan
                terawat.
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
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu.
              </p>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="p-6 mb-4 md:mb-0 md:p-4 border-solid border-2 rounded-lg h-48 overflow-auto">
              <i className="bi bi-award bg-limegreen-04"></i>
              <p className="text-base font-bold py-4">Sopir Profesional</p>
              <p className="text-sm font-light">
                Sopi yang profesional, berpengalaman, jujur, ramah, dan tepat
                waktu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
