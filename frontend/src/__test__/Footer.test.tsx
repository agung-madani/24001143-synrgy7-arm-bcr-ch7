import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders Footer component", () => {
    const { getByText } = render(<Footer />);

    // Test for text content
    expect(
      getByText("Jalan Suroyo No. 161 Mayangan Kota Probolonggo")
    ).toBeInTheDocument();
    expect(getByText("binarcarrental@gmail.com")).toBeInTheDocument();
    expect(getByText("081-233-334-808")).toBeInTheDocument();
    expect(getByText("Our Services")).toBeInTheDocument();
    expect(getByText("Why Us")).toBeInTheDocument();
    expect(getByText("Testimonial")).toBeInTheDocument();
    expect(getByText("FAQ")).toBeInTheDocument();
    expect(getByText("Connect with us")).toBeInTheDocument();
    expect(getByText("Copyright Binar 2024")).toBeInTheDocument();
    expect(getByText("Binar Rental Car")).toBeInTheDocument();
  });
});
