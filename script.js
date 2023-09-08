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

  const todayElement = document.getElementById("dayOfWeek");

  todayElement.textContent = dayName;

  // Day ends

  // Time start

  const now = new Date();

  const utcHour = now.getUTCHours().toString().padStart(2, "0");
  const utcMin = now.getMinutes().toString().padStart(2, "0");

  const utcTime = document.getElementById("time");

  utcTime.textContent = `${utcHour}:${utcMin}`;

  //  Time ends
});
