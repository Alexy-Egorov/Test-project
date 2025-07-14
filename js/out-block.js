const button = document.querySelector(".button");
const menu = document.querySelector(".block_common");

button.addEventListener("click", (e) => {
  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    button.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  } else {
    button.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  }
});

