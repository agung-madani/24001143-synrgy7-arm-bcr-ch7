import "../../index.css";
import React from "react";
import NavBarAdmin from "../../components/NavBarAdmin";
import MainContentArea from "../../components/MainContentArea";

const CarsManagementPage: React.FC = () => {
  return (
    <div>
      <div id="main-content" className="transition-width">
        {/* Navigation Bar */}
        <NavBarAdmin />
        {/* Main Content Area */}
        <MainContentArea />
      </div>
    </div>
  );
};

export default CarsManagementPage;
