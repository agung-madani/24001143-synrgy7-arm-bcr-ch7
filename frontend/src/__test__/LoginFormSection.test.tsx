import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import LoginFormSection from "../components/LoginFormSection";
import { CarsContext } from "../context/CarsContext";

// Mocking axios post method
jest.mock("axios");

describe("LoginFormSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mock calls before each test
  });

  it("submits the form with valid data", async () => {
    const setErrorMessage = jest.fn(); // Mock function for setErrorMessage

    render(
      <CarsContext.Provider value={{ errorMessage: "", setErrorMessage }}>
        <LoginFormSection />
      </CarsContext.Provider>
    );

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });

    // Mock axios post response
    const mockResponse = { data: { token: "mockToken" } };
    (axios.post as jest.Mock).mockResolvedValue(mockResponse);

    // Submit the form
    fireEvent.click(screen.getByText("Sign In"));

    // Wait for the submit promise to resolve
    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "tokenBinar",
        "mockToken"
      );
      expect(window.location.href).toBe("/cars-management");
    });

    expect(setErrorMessage).not.toHaveBeenCalled(); // Ensure setErrorMessage was not called
  });

  it("handles form submission error", async () => {
    const setErrorMessage = jest.fn(); // Mock function for setErrorMessage

    render(
      <CarsContext.Provider value={{ errorMessage: "", setErrorMessage }}>
        <LoginFormSection />
      </CarsContext.Provider>
    );

    // Mock axios post error
    const errorMessage = "Invalid credentials";
    (axios.post as jest.Mock).mockRejectedValue({
      response: { data: { message: errorMessage } },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Sign In"));

    // Wait for the submit promise to resolve
    await waitFor(() => {
      expect(setErrorMessage).toHaveBeenCalledWith(errorMessage);
    });

    // Ensure localStorage and window.location are not called
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(window.location.href).not.toBe("/cars-management");
  });
});
