// const increase = document.querySelector(".increase");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const value = document.getElementById("value");

// increase.addEventListener("click", function () {
//   number = value.textContent;
//   number++;
//   value.textContent = number;
//   if (number < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
// decrease.addEventListener("click", function () {
//   number = value.textContent;
//   number--;
//   value.textContent = number;
//   if (number < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
// reset.addEventListener("click", function () {
//   value.textContent = 0;
//   value.style.color = "black";
// });
// let count = 0;
// const increase = document.querySelector(".increase");
// const decrease = document.querySelector(".decrease");
// const reset = document.querySelector(".reset");
// const value = document.getElementById("value");

// increase.addEventListener("click", function () {
//   count++;
//   value.textContent = count;
//   if (count < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
// decrease.addEventListener("click", function () {
//   count--;
//   value.textContent = count;
//   if (count < 0) {
//     value.style.color = "red";
//   } else {
//     value.style.color = "black";
//   }
// });
// reset.addEventListener("click", function () {
//   count = 0;
//   value.textContent = count;
//   value.style.color = "black";
// });
let count = 0;

btns = document.querySelectorAll(".btn");
value = document.getElementById("value");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.classList.contains("increase")
      ? count++
      : e.currentTarget.classList.contains("decrease")
      ? count--
      : (count = 0);

    value.textContent = count;
    value.textContent < 0
      ? (value.style.color = "red")
      : value.textContent > 0
      ? (value.style.color = "green")
      : (value.style.color = "black");
  });
});
