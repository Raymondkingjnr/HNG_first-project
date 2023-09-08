document.addEventListener("DOMContentLoaded", function () {
  // Day starts
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = new Date().getDay();

  const dayName = daysOfWeek[currentDay];

  const todayElement = document.querySelector(
    '[ data-testid="currentDayOfTheWeek"]'
  );

  todayElement.textContent = dayName;
});

const utcTime = document.querySelector('[data-testid="currentUTCTime"]');

function updateTimer() {
  const now = new Date();
  const utcMilliseconds = now.getTime();
  utcTime.textContent = utcMilliseconds.toString();
}

setInterval(updateTimer, 1);
