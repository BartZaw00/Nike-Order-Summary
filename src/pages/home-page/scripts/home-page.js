/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";
import "../styles/section.scss";
import "../styles/loader.scss";
import "../styles/summary-box.scss";
import "../styles/summary-product.scss";
import "../styles/summary-prices.scss";


const btn = document.getElementById("confirm-button");
const loader = document.getElementById("loader");
const percent = document.getElementById("percent");
const progress = document.getElementById("progress");

let count = 4;
let per = 8;
let loading;

const animate = () => {
  if (count === 100) {
    clearInterval(loading);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    per += 3;
    count += 1;
    progress.style.width = per + "px";
    percent.textContent = count + "%";
  }
};

btn.addEventListener("click", () => {
  btn.classList.add("c-summary-box__button--confirm-hide");
  loader.classList.add("c-loader--active");
  loading = setInterval(animate, 20);
});
