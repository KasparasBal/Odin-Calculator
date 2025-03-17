const screenText = document.querySelector(".screen-text");
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    screenText.textContent += e.target.textContent;
  });
});
