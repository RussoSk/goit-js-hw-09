import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');


let countInterval = null;
let selectedDate = null;


// flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    const timeNow = new Date();
    if (selectedDate <= timeNow) {
      window.alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

// Таймер
startButton.addEventListener('click', startTimer);
// старт таймера
function startTimer() {
  const timeNow = new Date().getTime();
  const remainingTime = selectedDate - timeNow;
  datetimePicker.disabled = true;
  
  if (remainingTime <= 0) {
    displayTime(0, 0, 0, 0);
    return;
  }
  startButton.disabled = true;
  
  // оновлення таймера
  countInterval = setInterval(updateTimer, 1000);

  updateTimer();

  function updateTimer() {
    const timeNow = new Date().getTime();
    const remainingTime = selectedDate - timeNow;

    if (remainingTime <= 0) {
      clearInterval(countInterval);
      startButton.disabled = false;
      displayTime(0, 0, 0, 0);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    displayTime(days, hours, minutes, seconds);
  }
}

// вивід на дисплей 
function displayTime(days, hours, minutes, seconds) {
  daysValue.textContent = addLeadingZero(days);
  hoursValue.textContent = addLeadingZero(hours);
  minutesValue.textContent = addLeadingZero(minutes);
  secondsValue.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
