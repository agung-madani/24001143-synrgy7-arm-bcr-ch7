import "../index.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <header className="px-6 bg-[#F1F3FF]">
        <nav className="py-6 max-w-6xl mx-auto">
          <div className="container mx-auto flex items-center justify-between">
            <button
              className="text-darkblue-04 bg-darkblue-04 p-2"
              onClick={handleButtonClick}
            >
              Binar Rental Car
            </button>
            <div className="lg:flex gap-8 items-center hidden">
              <a className="text-sm font-normal" href="#our-services-section">
                Our Services
              </a>
              <a className="text-sm font-normal" href="#why-us-section">
                Why Us
              </a>
              <a className="text-sm font-normal" href="#testimonial-section">
                Testimonial
              </a>
              <a className="text-sm font-normal" href="#faq-section">
                FAQ
              </a>
              <a className="btn-green" href="#">
                Register
              </a>
            </div>
            <button
              className="lg:hidden"
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
              tabIndex={-1 as number}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="menu w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <div
        id="drawer-right-example"
        className="w-full max-w-48 fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white "
        tabIndex={-1 as number}
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="flex flex-col gap-3">
          <p className="font-bold">BCR</p>
          <a className="text-sm font-normal" href="#our-services-section">
            Our Services
          </a>
          <a className="text-sm font-normal" href="#why-us-section">
            Why Us
          </a>
          <a className="text-sm font-normal" href="#testimonial-section">
            Testimonial
          </a>
          <a className="text-sm font-normal" href="#faq-section">
            FAQ
          </a>
          <a className="w-full max-w-24 btn-green" href="#">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
