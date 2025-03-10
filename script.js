// Selection
const ratingContainer = document.querySelector(".rating-container");
const rating = document.querySelectorAll(".rate");
const thankYouContainer = document.querySelector(".thank-you-container");
const submitBtn = document.querySelector(".submit-btn");
const h2 = document.querySelector(".h-thank-you");

let clickedEl;

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function () {
    clickedEl = rating[i].innerHTML;
    console.log(clickedEl);
  });
}

submitBtn.addEventListener("click", function (e) {
  ratingContainer.classList.toggle("hidden");
  thankYouContainer.classList.toggle("hidden");

  h2.insertAdjacentHTML(
    "beforebegin",
    `<p class="your-rating-selection">
        You selected ${clickedEl} out of 5
      </p>`
  );
});
