const overlayMenu = document.querySelector(".overlay-menu");
const overlayBarMenuButton = document.querySelector(
  ".overlay-menu-toggle-button"
);

overlayBarMenuButton.addEventListener("click", fadeInOutMenu);

showMenu = false;

function fadeInOutMenu() {
  if (!showMenu) {
    randR = Math.floor(Math.random() * 255) + 1;
    randG = Math.floor(Math.random() * 255) + 1;
    randB = Math.floor(Math.random() * 255) + 1;
    overlayMenu.classList.add("show");
    overlayMenu.style.backgroundColor =
      "rgb(" + randR + ", " + randG + ", " + randB + ")";
    showMenu = true;
  } else {
    overlayMenu.classList.remove("show");
    showMenu = false;
  }
}
