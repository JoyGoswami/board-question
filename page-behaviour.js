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

// populate filter options
import { boardsNameArr, boardsYearArr, questionTypeArr } from "./sortData.js";
const boardSelectEl = document.getElementById("board");
const yearSelectEl = document.getElementById("year");
const typeSelectEl = document.getElementById("type");

populateSelectEl(boardSelectEl, boardsNameArr); // populate board options
populateSelectEl(yearSelectEl, boardsYearArr); // populate year options
populateSelectEl(typeSelectEl, questionTypeArr); // populate type options

function populateSelectEl(parentEl, dataArr) {
  dataArr.forEach((data) => {
    const option = document.createElement("option");
    // if (data.split(" ").length > 1) {
    //   option.value = data.split(" ")[0].toLowerCase();
    // } else {
    //   option.value = data.toLowerCase();
    // }
    option.value = data.split(" ").join("-");
    option.textContent = data;

    parentEl.append(option);
  });
}
