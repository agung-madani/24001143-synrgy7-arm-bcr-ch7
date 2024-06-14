import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FindCarsPage from "./pages/FindCarsPage";
import { CarsProvider } from "./context/CarsContext";
import LoginPage from "./pages/LoginPage";
import Protected from "./components/protected";
import CarsManagementPage from "./pages/CarsManagementPage";
import EditCarPage from "./pages/EditCarPage";

function App() {
  return (
    <div>
      <CarsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cars" element={<FindCarsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/*"
              element={
                <Protected>
                  <Routes>
                    <Route
                      path="/cars-management"
                      element={<CarsManagementPage />}
                    />
                    <Route
                      path="/cars-management/:id"
                      element={<EditCarPage />}
                    />
                  </Routes>
                </Protected>
              }
            />
          </Routes>
        </BrowserRouter>
      </CarsProvider>
    </div>
  );
}

export default App;
