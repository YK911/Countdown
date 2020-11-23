const targetDate = new Date(2020, 10, 27, 24, 0, 0) // установить дату обратного отсчета
let days,
  hours,
  minutes,
  seconds; // переменные для единиц времени
const countdown = document.getElementById('tiles'); // элемент тега

setInterval(() => getCountdown(), 1000);

function getCountdown() {


  const currentDate = new Date().getTime();
  let secondsLeft = (targetDate - currentDate) / 1000;

  days = pad(parseInt(secondsLeft / 86400));
  secondsLeft = secondsLeft % 86400;

  hours = pad(parseInt(secondsLeft / 3600));
  secondsLeft = secondsLeft % 3600;

  minutes = pad(parseInt(secondsLeft / 60));
  seconds = pad(parseInt(secondsLeft % 60));

  // строка обратного отсчета + значение тега
  countdown.innerHTML = `<span>${days}</span><span class="dots">:</span>
    <span>${hours}</span><span class="dots">:</span><span>${minutes}</span><span class="dots">:</span><span>${seconds}</span>`;

  setProgress(currentDate, targetDate)
}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

function setProgress(current, target) {

  let end = target / 1000
  current = Math.round(current / 1000)
  const diff = end - current

  
  const progressBar = document.querySelector('.countdown-progress-bar'); // получить элемент прогресс бар
  
  progressBar.value = diff

  let intervalId = setInterval(() => {

    if (end <= 0) {
      clearInterval(intervalId)
    } else {

    }

  }, target)

}

