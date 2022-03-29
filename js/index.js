const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".color");
const normal = document.querySelector(".color-type .normal");
const gradient = document.querySelector(".color-type .gradient");

normal.addEventListener("click", function () {
  //** Adding the active class to normal and removing the active class from gradient if present **//

  normal.classList.add("active");
  gradient.classList.remove("active");
});

gradient.addEventListener("click", function () {
  //** Adding the active class to gradiemt and removing the active class from normal if present **//

  gradient.classList.add("active");
  normal.classList.remove("active");
});

//** Listening to the main(color change) button element for click **//
btn.addEventListener("click", function (event) {
  //** Checking the active class on both the buttons and executing the appropriate functions **//

  normal.classList.contains("active")
    ? normalColors()
    : gradient.classList.contains("active")
    ? gradientColors()
    : normalColors();

  event.preventDefault();
});

//** When normal is active **//
function normalColors() {
  const random1 = Math.random() * 255 + 1;
  const random2 = Math.random() * 255 + 1;
  const random3 = Math.random() * 255 + 1;
  const opacity = Math.random();

  document.body.style.background = `rgba(${random3},${random1},${random2},${opacity})`;
  btn.style.boxShadow = `0 0 15px 2px rgba(${random1},${random3},${random2},${opacity})`;
  colorCode.innerHTML = document.body.style.backgroundColor;
}

//** When gradient is active **//
function gradientColors() {
  const random1 = Math.random() * 255 + 1;
  const random2 = Math.random() * 255 + 1;
  const random3 = Math.random() * 255 + 1;
  const opacity = Math.random();
  const opacity1 = Math.random();

  document.body.style.background = `linear-gradient(45deg,rgba(${random3},${random1},${random2},${opacity1}),rgba(${random2},${random3},${random1},${opacity}))`;
  btn.style.boxShadow = `0 0 15px 2px rgba(${random1},${random3},${random2},${opacity})`;
  colorCode.innerHTML = document.body.style.backgroundImage;
}

//** When the page loads for the first time **//
normalColors();
