/* 
PRIMO METODO: CAMBIO COLORE DI SFONDO TRAMITE ALTEZZA DELLO SCROLL SULL'ASSE Y

const navbar = document.querySelector(".nav-container");
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
 */



// SECONDO METODO PIU' RESPONSIVE: CAMBIO COLORE DI SFONDO AL RAGGIUNGIMENTO
// DELLA FINE DELL'HEADER



const nav = document.querySelector(".nav-container");
const header = document.querySelector("header");
const button = document.querySelector("nav button")
const navHeight = nav.getBoundingClientRect().height;

function updateNavColor(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add("nav-white");
    button.classList.add("green-button");
  } else {
    nav.classList.remove("nav-white");
    button.classList.remove("green-button")
  }
  
}

const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

headerObserver.observe(header)