const navToggler = document.querySelector("#nav-toggler");
const mobileNav = document.querySelector("#mobile-nav");

navToggler.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

const goTop = document.querySelector("#goTop");

goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This enables smooth scrolling
  });
});

window.onscroll = () => {
  if (window.scrollY > 500) {
    goTop.classList.remove("translate-x-full");
  } else goTop.classList.add("translate-x-full");
};
