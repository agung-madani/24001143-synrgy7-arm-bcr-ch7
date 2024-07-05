import { render, fireEvent } from "@testing-library/react";
import HeroSection from "../components/HeroSection";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Mock useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("HeroSection Component", () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  test("renders HeroSection component", () => {
    const { getByText } = render(
      <Router>
        <HeroSection />
      </Router>
    );

    const button = getByText("Mulai Sewa Mobil");
    expect(button).toBeInTheDocument();
  });

  test("clicking button navigates to /cars", () => {
    const { getByText } = render(
      <Router>
        <HeroSection />
      </Router>
    );

    const button = getByText("Mulai Sewa Mobil");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith("/cars");
  });
});
