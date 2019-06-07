const overlayMenu = document.querySelector(".overlay-menu");
const overlayBarMenuButton = document.querySelector(
  ".overlay-menu-toggle-button"
);
const photographyWindow = document.querySelector(".photography-window");
const photographyWindowButton = document.getElementById("photography-button");

overlayBarMenuButton.addEventListener("click", fadeInOutMenu);
photographyWindowButton.addEventListener("click", fadeInPhotographyWindow);

// Init all pages as h
showMenu = false;
showPhotography = false;

function fadeInOutMenu() {
  if (!showMenu) {
    // Init Menu Visability
    showMenu = true;
    showPhotography = false;

    // Random Color Background for Menu Overlay
    randR = Math.floor(Math.random() * 255) + 1;
    randG = Math.floor(Math.random() * 255) + 1;
    randB = Math.floor(Math.random() * 255) + 1;
    overlayMenu.style.backgroundColor =
      "rgb(" + randR + ", " + randG + ", " + randB + ")";

    // Show / Hide Layers
    overlayMenu.classList.add("show");
  } else {
    overlayMenu.classList.remove("show");
    photographyWindow.classList.remove("show");
    showMenu = false;
    showPhotography = false;
  }
}

function fadeInPhotographyWindow() {
  if (!showPhotography) {
    photographyWindow.classList.add("show");
    overlayMenu.classList.remove("show");
    showPhotography = true;
    showMenu = false;
    console.log(showPhotography);
  } else {
    photographyWindow.classList.remove("show");
    showPhotography = false;
  }
}
