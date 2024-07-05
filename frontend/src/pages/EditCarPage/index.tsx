import "../../index.css";
import NavBarAdmin from "../../components/NavBarAdmin";
import MainContentEditArea from "../../components/MainContentEditArea";

const EditCarPage: React.FC = () => {
  return (
    <>
      <div>
        {/* Main Content */}
        <div id="main-content" className="transition-width">
          {/* Navigation Bar */}
          <NavBarAdmin />
          {/* Main Content Edit Area */}
          <MainContentEditArea />
        </div>
      </div>
    </>
  );
};

export default EditCarPage;
