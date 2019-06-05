const overlayMenu = document.querySelector(".overlay-menu");
const overlayBarMenuButton = document.querySelector(
  ".overlay-menu-toggle-button"
);
const photographyWindow = document.querySelector(".photography-window");
const photographyWindowButton = document.getElementById("photography-button");

overlayBarMenuButton.addEventListener("click", fadeInOutMenu);
photographyWindowButton.addEventListener("click", fadeInPhotographyWindow);

showMenu = false;
showPhotography = false;

function fadeInOutMenu() {
  if (!showMenu) {
    randR = Math.floor(Math.random() * 255) + 1;
    randG = Math.floor(Math.random() * 255) + 1;
    randB = Math.floor(Math.random() * 255) + 1;
    overlayMenu.classList.add("show");
    overlayMenu.style.backgroundColor =
      "rgb(" + randR + ", " + randG + ", " + randB + ")";
    showMenu = true;
    showPhotography = false;
  } else {
    overlayMenu.classList.remove("show");
    showMenu = false;
  }
}

function fadeInPhotographyWindow() {
  if (!showPhotography) {
    photographyWindow.classList.add("show");
    overlayMenu.classList.remove("show");
    showPhotography = true;
    showMenu = false;
  } else {
    photographyWindow.classList.remove("show");
    showPhotography = false;
  }
}
