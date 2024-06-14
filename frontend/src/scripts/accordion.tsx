const toggleAccordion = (button: HTMLElement) => {
  const body = button.nextElementSibling as HTMLElement;

  if (body.classList.contains("hidden")) {
    // The accordion is currently closed, so open it
    body.classList.remove("hidden");
    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.replace("bi-chevron-down", "bi-chevron-up");
    }
  } else {
    // The accordion is currently open, so close it
    body.classList.add("hidden");
    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.replace("bi-chevron-up", "bi-chevron-down");
    }
  }
};

export default toggleAccordion;
