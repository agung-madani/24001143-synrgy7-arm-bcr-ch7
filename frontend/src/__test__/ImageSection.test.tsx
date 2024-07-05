import { render } from "@testing-library/react";
import ImageSection from "../components/ImageSection";

// Mock any CSS or image imports used in ImageSection.tsx
jest.mock("../index.css", () => ({}));

describe("ImageSection component", () => {
  test("renders correctly", () => {
    const { getByAltText } = render(<ImageSection />);

    // Ensure the component renders the image with correct alt text
    const imageElement = getByAltText("Background");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toBe("./images/cars_login.png");
  });

  // You can add more tests here as needed
});
