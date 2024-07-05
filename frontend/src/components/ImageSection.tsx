import "../index.css";

const ImageSection = () => {
  return (
    <div className="hidden md:block md:w-2/3 relative bg-darkblue-05">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="./images/cars_login.png"
        alt="Background"
      />
    </div>
  );
};

export default ImageSection;
