const calculator = () => {
  let operand1 = document.getElementById("operand1").value;
  let operator = document.querySelector("#operator").value;
  let operand2 = document.getElementById("operand2").value;
  console.log(operand1);

  let firstNumber = operand1;
  let secondNumber = operand2;
  let answer = 0;
  let lastAnswer = 0;
  console.log(firstNumber);

  if (firstNumber === NaN || secondNumber === NaN) {
    answer = "Enter only numbers in the number inputs";
  } else if (
    operator === "+" ||
    operator === "-" ||
    operator === "x" ||
    operator === "/" ||
    operator === "pow" ||
    operator === "sqrt"
  ) {
    switch (operator) {
      case "+":
        answer = firstNumber + secondNumber;
        break;
      case "-":
        answer = firstNumber - secondNumber;
        break;
      case "x":
        answer = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber == 0) {
          answer = "The denominator cannot equal '0', enter a different number";
        } else if (secondNumber !== 0) {
          answer = firstNumber / secondNumber;
        }
        break;
      case "pow":
        answer = Math.pow(firstNumber, secondNumber);
        break;
      case "sqrt":
        answer = Math.sqrt(firstNumber);
        break;
    }
  } else {
    answer =
      "Enter one of these operators: +, -, x, /, pow, or sqrt into the middle text field";
  }
  console.log(answer);
  lastAnswer = answer;
  document.querySelector("#answer").textContent = answer;
  document.getElementById("memory-button").addEventListener("click", () => {
    document.querySelector("#operand1").value = lastAnswer;
  });
};
// To clear all input and answer fields
const clear = () => {
  let operand1 = document.querySelector("#operand1");
  let operator = document.querySelector("#operator");
  let operand2 = document.querySelector("#operand2");

  operand1.value = "";
  operator.value = "";
  operand2.value = "";
  document.querySelector("#answer").textContent = "";
};

const assignOperator = (event) => {
  let operator = event.target.value;
  document.querySelector("#operator").value = operator;

  document.getElementById("operand2").focus();
};

document.querySelector("#answer-button").addEventListener("click", calculator);
document.querySelector("#clear-button").addEventListener("click", clear);

document.querySelectorAll(".operator-buttons").forEach((button) => {
  button.addEventListener("click", assignOperator);
});

document.querySelector("#sqrt").addEventListener("click", calculator);
