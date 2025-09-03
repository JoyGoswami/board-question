// Page ribbon control
const logoRibbon = document.querySelector(".logo");
const navRibbon = document.querySelector("nav");

let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    logoRibbon.style.top = "-90px";
    navRibbon.classList.add("sticky");
  } else {
    logoRibbon.style.top = "0px";
    navRibbon.classList.remove("sticky");
  }
  lastScroll = currentScroll;
});

// Form control
const filterControlForm = document.querySelector(".filter-control-form");

filterControlForm.addEventListener("change", () => {
  const formData = new FormData(filterControlForm);

  // Form data to object
  const data = Object.fromEntries(formData.entries());
});
