import { render } from "@testing-library/react";
import WhyUsSection from "../components/WhyUsSection";

describe("WhyUsSection Component", () => {
  test("renders WhyUsSection component", () => {
    const { getByText } = render(<WhyUsSection />);

    // Test that the component renders
    const heading = getByText("Why Us?");
    expect(heading).toBeInTheDocument();

    // Example test for one of the sections
    const sectionHeading = getByText("Mobil Lengkap");
    expect(sectionHeading).toBeInTheDocument();
  });
});
