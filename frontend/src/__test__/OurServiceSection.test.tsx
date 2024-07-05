import { render } from "@testing-library/react";
import OurServiceSection from "../components/OurServiceSection";
import { BrowserRouter as Router } from "react-router-dom";

describe("OurServiceSection Component", () => {
  test("renders OurServiceSection component", () => {
    const { getByText, getByAltText } = render(
      <Router>
        <OurServiceSection />
      </Router>
    );

    // Check for the presence of the heading
    const heading = getByText(
      "Best Car Rental for any kind of trip in (Lokasimu)!"
    );
    expect(heading).toBeInTheDocument();

    // Check for the presence of the image
    const image = getByAltText("");
    expect(image).toBeInTheDocument();

    // Check for the presence of the first list item
    const listItem = getByText("Sewa Mobil Dengan Suupir di Bali 12 Jam");
    expect(listItem).toBeInTheDocument();

    // Check for the presence of other list items
    expect(
      getByText("Sewa Mobil Lepas Kunci di Bali 24 Jam")
    ).toBeInTheDocument();
    expect(getByText("Sewa Mobil Jangka Panjang Bulanan")).toBeInTheDocument();
    expect(
      getByText("Gratis Antar - Jemput Mobil di Bandara")
    ).toBeInTheDocument();
    expect(
      getByText("Layanan Airport Transfer / Drop In Out")
    ).toBeInTheDocument();
  });
});
