// Funzioni di appoggio
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomNumbersArray = (min, max, length) => {
  const numsArray = [];
  for (let i = 0; i < length; i++) {
    const randomNum = getRandomInt(min, max);
    numsArray.push(randomNum);
  }
  return numsArray;
};

///////////////////////
// Elementi html
//////////////////////
const startBtn = document.getElementById("start-btn");
const numbersListElem = document.getElementById("numbers-list");
const countdownElem = document.getElementById("countdown");
const formElem = document.getElementById("answers-form");
const inputsList = document.querySelectorAll("input");
const messageElem = document.getElementById("message");

///////////////////////
// Variabili globali
//////////////////////
let numbersArray = [];

const clearGame = () => {
  messageElem.innerHTML = "";
  formElem.classList.add("d-none");
  formElem.reset();
};

const printNumbers = (numbersToShow) => {
  // Mostro i numeriu random
  for (let i = 0; i < numbersToShow.length; i++) {
    const curNumber = numbersToShow[i];
    numbersListElem.innerHTML += `<li>${curNumber}</li>`;
  }
};

const showForm = () => {
  numbersListElem.innerHTML = "";
  countdownElem.innerHTML = "";
  formElem.classList.remove("d-none");
  startBtn.disabled = false;
}

const startTimer = (start, end) => {
  let counter = start;
  const intervalId = setInterval(() => {
    if (counter >= end) {
      countdownElem.innerHTML = counter--;
    } else {
      clearInterval(intervalId);
      showForm();
    }
  }, 1000);
};

const startGame = () => {
  clearGame();
  startBtn.disabled = true;
  numbersArray = getRandomNumbersArray(1, 100, 5);
  console.log(numbersArray);
  printNumbers(numbersArray);
  // Faccio partire il timer
  startTimer(30, 0);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log("submit");
  const insertedNumbers = [];
  for (let i = 0; i < inputsList.length; i++) {
    const curInput = inputsList[i];
    insertedNumbers.push(parseInt(curInput.value));
  }
  console.log(insertedNumbers);

  const correctNumbers = [];
  for (let i = 0; i < insertedNumbers.length; i++) {
    const curNumber = insertedNumbers[i];
    if (numbersArray.includes(curNumber)) {
      correctNumbers.push(curNumber);
    }
  }
  console.log(correctNumbers);

  messageElem.innerHTML = `Hai indovinato ${
    correctNumbers.length
  } numeri: ${correctNumbers.join(",")}`;
};

startBtn.addEventListener("click", startGame);
formElem.addEventListener("submit", handleFormSubmit);
