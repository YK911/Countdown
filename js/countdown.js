const targetDate = new Date(2020, 10, 27, 24, 0, 0) // установить дату обратного отсчета
let days,
  hours,
  minutes,
  seconds; // переменные для единиц времени
const countdown = document.getElementById('tiles'); // элемент тега
const day = document.getElementById('days')
const hrs = document.getElementById('hrs')
const mins = document.getElementById('mins')
const secs = document.getElementById('secs')

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

  day.textContent = `${days}`
  hrs.textContent = `${hours}`
  mins.textContent = `${minutes}`
  secs.textContent = `${seconds}`

}

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}
