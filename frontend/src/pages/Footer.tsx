import "../index.css";

const Footer = () => {
  return (
    <footer className="footer p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          <div className="footer-info lg:w-[268px] lg:h-[112px]">
            <p className="mb-2">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo
            </p>
            <p className="mb-2">binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="flex flex-col gap-4">
            <a className="font-normal text-sm" href="#our-services-section">
              Our Services
            </a>
            <a className="font-normal text-sm" href="#why-us-section">
              Why Us
            </a>
            <a className="font-normal text-sm" href="#testimonial-section">
              Testimonial
            </a>
            <a className="font-normal text-sm" href="#faq-section">
              FAQ
            </a>
          </div>
          <div className="w-[268px] h-[68px]">
            <p className="mb-2">Connect with us</p>
            <div className="flex gap-4">
              <a className="" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="" href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="" href="#">
                <i className="bi bi-envelope"></i>
              </a>
              <a className="" href="#">
                <i className="bi bi-twitch"></i>
              </a>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-legal">
              <p className="text-sm font-light mb-4">Copyright Binar 2024</p>
              <a className="text-darkblue-04 bg-darkblue-04 p-2" href="#">
                Binar Rental Car
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
