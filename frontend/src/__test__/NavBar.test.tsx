import { render, fireEvent } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Mock useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("NavBar Component", () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  test("renders NavBar component", () => {
    const { getByText } = render(
      <Router>
        <NavBar />
      </Router>
    );

    const button = getByText("Binar Rental Car");
    expect(button).toBeInTheDocument();
  });

  test("clicking button navigates to /", () => {
    const { getByText } = render(
      <Router>
        <NavBar />
      </Router>
    );

    const button = getByText("Binar Rental Car");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith("/");
  });
});
