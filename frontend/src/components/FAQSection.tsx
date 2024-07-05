import { useEffect } from "react";
import "../index.css";
import toggleAccordion from "../scripts/accordion";

const FAQSection = () => {
  useEffect(() => {
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
  return (
    <section className="faq-section p-6 lg:pb-100" id="faq-section">
      <div className="container max-w-6xl mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-center lg:text-start">
            <h2 className="font-bold text-2xl mb-4">
              Frequently Asked Question
            </h2>
            <p className="font-light text-sm">
              Frequently Asked Questions (Pertanyaan yang Sering Diajukan) ini
              berisi jawaban atas beragam pertanyaan umum yang mungkin Anda
              miliki.
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
                  memiliki SIM yang masih berlaku dan kartu identitas (KTP atau
                  paspor) yang sah. Selain itu, kami juga memerlukan jaminan
                  berupa kartu kredit atau deposit tunai.
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
                  Jika terjadi kecelakaan, segera hubungi layanan darurat dan
                  laporkan insiden tersebut kepada kami. Kami akan memberikan
                  panduan langkah-langkah selanjutnya sesuai dengan kebijakan
                  asuransi dan prosedur kami.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
