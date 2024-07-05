import { render, fireEvent } from "@testing-library/react";
import SewaMobilSection from "../components/SewaMobilSection";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Mock useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("SewaMobilSection Component", () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  test("renders SewaMobilSection component", () => {
    const { getByText } = render(
      <Router>
        <SewaMobilSection />
      </Router>
    );

    const button = getByText("Mulai Sewa Mobil");
    expect(button).toBeInTheDocument();
  });

  test("clicking button navigates to /cars", () => {
    const { getByText } = render(
      <Router>
        <SewaMobilSection />
      </Router>
    );

    const button = getByText("Mulai Sewa Mobil");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith("/cars");
  });
});
