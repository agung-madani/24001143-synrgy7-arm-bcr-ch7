import { render } from "@testing-library/react";
import TestimonialSection from "../components/TestimonialSection";

// Mock the slider function
jest.mock("../scripts/slider", () => jest.fn());

describe("TestimonialSection Component", () => {
  test("renders TestimonialSection component", () => {
    const { getByText } = render(<TestimonialSection />);

    // Check if the heading and some text content is present
    const headingElement = getByText("Testimonial");
    const textElement = getByText(
      "Berbagai ulasan positif dari pelanggan kami."
    );

    expect(headingElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test("calls slider initialization on mount", () => {
    render(<TestimonialSection />);

    // Check if the slider function was called during component mount
    expect(require("../scripts/slider")).toHaveBeenCalled();
  });
});
