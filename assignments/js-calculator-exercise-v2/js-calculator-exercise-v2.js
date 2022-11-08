let operand1Element = document.querySelector("#operand1");
let operand2Element = document.querySelector("#operand2");

const numericButtons = document.querySelectorAll(".numerical-buttons");
const operatorButtons = document.querySelectorAll(".operator-buttons");
const equalButton = document.querySelector("#answer-button");
const clearButton = document.querySelector("#clear-button");
const memoryButton = document.querySelector("#memory-button");

let operand1 = "";
let operand2 = "";
let operator = "";
let currentAnswer = 0;

const clear = () => {
  operand1 = "";
  operand2 = "";
  operator = "";
};

const memory = () => {
  if (operand2 !== "") return;
  addNumber(currentAnswer);
  display();
};

const assignOperator = (operatorValue) => {
  if (operand2 === "") return;
  if (operand1 !== "") {
    calculate();
  }
  operator = operatorValue;
  operand1 = operand2;
  operand2 = "";
};

const addNumber = (number) => {
  if (number === "." && operand2.includes(number)) return;
  operand2 = operand2.toString() + number.toString();
};

const display = () => {
  operand2Element.innerText = operand2;
  if (operator != null) operand1Element.innerText = `${operand1} ${operator}`;
};

const calculate = () => {
  const firstValue = parseFloat(operand1);
  const secondValue = parseFloat(operand2);

  if (isNaN(firstValue) || isNaN(secondValue)) return;
  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "/":
      if (secondValue === 0) {
        result = "Cannot use 0 as a denominator";
      } else {
        result = firstValue / secondValue;
      }
      break;
    case "pow":
      result = Math.pow(firstValue, secondValue);
      break;
    case "sqrt":
      result = Math.sqrt(firstValue);
      break;
    default:
      result = "Use only numbers.";
  }
  operand2 = result;
  operator = "";
  operand1 = "";
  currentAnswer = result;
};

numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    addNumber(button.innerText);
    display();
  });
});
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    assignOperator(button.innerText);
    display();
  });
});
equalButton.addEventListener("click", () => {
  calculate();
  display();
});
clearButton.addEventListener("click", () => {
  clear();
  display();
});
memoryButton.addEventListener("click", () => {
  memory();
});
