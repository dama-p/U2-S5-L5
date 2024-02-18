const navbar = document.querySelector("#nav-container");
const button = document.querySelector("nav button")
window.onscroll = () => {
  if (window.scrollY > 465) {
    navbar.classList.add("nav-white");
    button.classList.add("green-button");
  } else {
    navbar.classList.remove("nav-white");
    button.classList.remove("green-button")
  }
};
