const slider = () => {
  // @ts-expect-error This instance is initialized with custom options not fully typed
  const sliderInstance = tns({
    container: ".my-slider",
    items: 3,
    slideBy: 1,
    center: true,
    mouseDrag: true,
    autoplay: true,
    nav: false,
    autoplayButtonOutput: false,
    controlsContainer: "#custom-control",
    responsive: {
      1024: {
        items: 2,
      },
      100: {
        items: 1,
      },
    },
  });

  return sliderInstance;
};

export default slider;
