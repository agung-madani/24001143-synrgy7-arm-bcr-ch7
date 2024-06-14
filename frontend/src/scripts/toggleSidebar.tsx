function toggleSidebar() {
  console.log("Toggling sidebar");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const sidebarDashboard = document.getElementById("sidebar__dashboard");
  const sidebarCars = document.getElementById("sidebar__cars");

  if (sidebar) {
    sidebar.classList.toggle("hidden");
    if (sidebar.classList.contains("hidden")) {
      if (sidebarDashboard && !sidebarDashboard.classList.contains("hidden")) {
        sidebarDashboard.classList.add("hidden");
      }
      if (sidebarCars && !sidebarCars.classList.contains("hidden")) {
        sidebarCars.classList.add("hidden");
      }
      if (mainContent) {
        mainContent.classList.remove("ml-[70px]", "ml-[290px]");
      }
    } else {
      if (mainContent) {
        mainContent.classList.add("ml-[70px]");
      }
    }
  }
}

function toggleSubSidebar(subSidebarId: string, otherSubSidebarId: string) {
  const subSidebar = document.getElementById(subSidebarId);
  const otherSubSidebar = document.getElementById(otherSubSidebarId);
  const mainContent = document.getElementById("main-content");

  if (subSidebar) {
    subSidebar.classList.toggle("hidden");
    if (subSidebar.classList.contains("hidden")) {
      if (mainContent) {
        mainContent.classList.add("ml-[70px]");
        mainContent.classList.remove("ml-[290px]");
      }
    } else {
      if (otherSubSidebar && !otherSubSidebar.classList.contains("hidden")) {
        otherSubSidebar.classList.add("hidden");
      }
      if (mainContent) {
        mainContent.classList.remove("ml-[70px]");
        mainContent.classList.add("ml-[290px]");
      }
    }
  }
}

export { toggleSidebar, toggleSubSidebar };
