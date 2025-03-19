//Declarations
const screenText = document.querySelector(".screen-text");
const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalButton = document.getElementById("equal");
const deleteButton = document.getElementById("delete");
const clearButton = document.getElementById("clear");

let number1 = "";
let number2 = "";
let operator = "";
let answer = "";
let operatorIndex = "";

//Operation Functions
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const squareRoot = (a) => {
  return Math.sqrt(a);
};
const power = (a, b) => {
  return Math.pow(a, b);
};

function operate(num1, operator, num2) {
  switch (operator) {
    //add
    case "+":
      answer = add(num1, num2);
      break;
    //subtract
    case "-":
      answer = subtract(num1, num2);
      break;
    //multiply
    case "*":
      answer = multiply(num1, num2);
      break;
    //divide
    case "/":
      answer = divide(num1, num2);
      break;
    //square root
    case "√":
      answer = squareRoot(num1);
      break;
    //power
    case "ˣ":
      answer = power(num1, num2);
      break;
  }
  return answer;
}

//Event Listeners
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.value;
    screenText.textContent += buttonText;

    if (!operator) {
      number1 += screenText.textContent;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let operatorValue = e.target.value;
    operator = operatorValue;
    if (
      !screenText.textContent.includes(operator) &&
      screenText.textContent.length > 0
    ) {
      screenText.textContent += operatorValue;
    }

    if (
      screenText.textContent.includes(operator) &&
      screenText.textContent.substring(operatorIndex + 1).length != 0
    ) {
      operatorIndex = screenText.textContent.indexOf(operator);
      number1 = screenText.textContent.substring(0, operatorIndex);
      number2 = screenText.textContent.substring(operatorIndex + 1);
      answer = operate(parseFloat(number1), operator, parseFloat(number2));
      answer.length > 8
        ? (screenText.textContent = answer.toFixed(3))
        : (screenText.textContent = answer);
      number1 = answer;
      number2 = "";
    }
  });
});

equalButton.addEventListener("click", () => {
  if (screenText.textContent.includes(operator)) {
    operatorIndex = screenText.textContent.indexOf(operator);
    number1 = screenText.textContent.substring(0, operatorIndex);
    number2 = screenText.textContent.substring(operatorIndex + 1);
  }
  answer = operate(parseFloat(number1), operator, parseFloat(number2));
  answer.length > 8
    ? (screenText.textContent = answer.toFixed(3))
    : (screenText.textContent = answer);
});

deleteButton.addEventListener("click", () => {
  answer.substring(0, answer.length - 1);
  let str = screenText.textContent.substring(
    0,
    screenText.textContent.length - 1
  );
  screenText.textContent = str;
});

clearButton.addEventListener("click", () => {
  answer = "";
  screenText.textContent = "";
  number1 = "";
  number2 = "";
});
