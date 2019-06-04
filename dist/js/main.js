const overlayMenu = document.querySelector(".overlay-menu");
const overlayBarMenuButton = document.querySelector(
  ".overlay-menu-toggle-button"
);

overlayBarMenuButton.addEventListener("click", fadeInOutMenu);

showMenu = false;

function fadeInOutMenu() {
  if (!showMenu) {
    overlayMenu.classList.add("show");
    showMenu = true;
  } else {
    overlayMenu.classList.remove("show");
    showMenu = false;
  }
}
