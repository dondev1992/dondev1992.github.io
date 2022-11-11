let startTime = document.getElementById("count-down");
let output = document.getElementById("output");
let interval;
let counter;

const removeAllButtons = () => {
  const container = document.getElementById("grid-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const generateNumberList = (maxNumber) => {
  numbersList = [];
  for (let i = 1; i < maxNumber + 1; i++) {
    numbersList.push(i);
  }
  return numbersList;
};

const generateRandomNumbers = () => {
  const numberOfButtons = document.querySelector("#number-of-buttons").value;
  const maxNumber = parseInt(numberOfButtons);
  let numberArray = [];
  let randomNumber = 1;

  let output = document.getElementById("output");
  output.innerText = "";

  stopCounter(interval);
  removeAllButtons();
  generateNumberList(maxNumber);
  startCountDown();

  do {
    randomNumber = Math.floor(Math.random() * maxNumber + 1);
    if (isNaN(maxNumber) || maxNumber === 0) {
      clearInterval(interval);
      output.innerText = "Enter a number";
      output.style.color = "red";
    } else if (!numberArray.includes(randomNumber)) {
      generateButtons(randomNumber);
      numberArray.push(randomNumber);
    }
  } while (numberArray.length < maxNumber);

  return numberArray;
};

const ifCorrectButton = (event) => {
  const output = document.getElementById("output");
  let clock = document.getElementById("counter");
  const button = event.target;
  let buttonNumber = parseInt(event.target.value);

  if (buttonNumber === numbersList[0]) {
    button.style.backgroundColor = "#ffaa5a";
    numbersList.shift();
    output.innerText = "";

    if (numbersList.length === 0) {
      output.innerText = "You win!";
      output.style.color = "green";
      clock.style.color = "green";
      clearInterval(interval);
      removeAllButtons();
    }
  } else {
    output.innerText = "Wrong!";
    output.style.color = "red";
  }
};

const startCountDown = () => {
  let counter = parseInt(startTime.value);
  let clock = document.getElementById("counter");

  if (isNaN(counter) || counter == 0) {
    clearInterval(interval);
    output.innerText = "Enter a number";
    output.style.color = "red";
  } else {
    interval = setInterval(() => {
      clock.innerText = `${counter}s`;
      clock.style.color = "black";
      counter--;

      if (counter < 5) {
        clock.style.color = "red";
      }

      if (counter < 0) {
        output.innerText = "You Lose!";
        output.style.color = "red";
        clearInterval(interval);
        removeAllButtons();
      }
    }, 1000);
  }
};

const stopCounter = (interval) => {
  clearInterval(interval);
};

const generateButtons = (number) => {
  const container = document.getElementById("grid-container");
  const button = document.createElement("button");

  button.addEventListener("click", ifCorrectButton, false);
  button.value = number;
  button.innerText = number;
  button.className = "tile";

  container.appendChild(button);
};

// Create start button and add event listener

const startButton = document.getElementById("start_button");
startButton.addEventListener("click", generateRandomNumbers);
