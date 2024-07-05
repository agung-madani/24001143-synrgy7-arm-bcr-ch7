import { render, fireEvent, screen } from "@testing-library/react";
import FAQSection from "../components/FAQSection";
import { BrowserRouter as Router } from "react-router-dom";

// Mock toggleAccordion function (assuming it's imported and used in the component)
jest.mock("../scripts/accordion", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("FAQSection Component", () => {
  test("renders FAQSection component", () => {
    render(
      <Router>
        <FAQSection />
      </Router>
    );

    const titleElement = screen.getByText("Frequently Asked Question");
    expect(titleElement).toBeInTheDocument();
  });

  test("clicking accordion header toggles accordion body", () => {
    render(
      <Router>
        <FAQSection />
      </Router>
    );

    const accordionHeaders = screen.getAllByRole("button", {
      name: /accordion header/i,
    });

    accordionHeaders.forEach((header) => {
      fireEvent.click(header); // Simulate click on accordion header

      // Check if the associated body toggles its visibility
      const body = header.nextElementSibling;
      expect(body).toHaveClass("accordion-body"); // Assuming the default state is hidden
      expect(body).toHaveClass("hidden"); // Check if the body is hidden after click
    });
  });
});
