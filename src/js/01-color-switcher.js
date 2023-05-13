const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId = null;

startButton.addEventListener('click', startChangingColor);
stopButton.addEventListener('click', stopChangingColor);


function startChangingColor() {
  startButton.disabled = true; // Вимкнути кнопку "Start"
  intervalId = setInterval(changeColor, 1000);
}

function stopChangingColor() {
  startButton.disabled = false; // Увімкнути кнопку "Start"
  clearInterval(intervalId);
}

function changeColor() {
  const body = document.body;
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

