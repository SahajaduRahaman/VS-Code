const date = new Date();
const date2 = new Date();

const renderCalendar = () => {

  // setting date to current months first date
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  // this is for getting current months last date
  const monthLastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // this is for getting previous months last date

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // this is for getting current months first day index

  const firstDayIndex = date.getDay();

  // this is for getting current months last day index

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  // this is for how many next months days want to show in current months calender

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = date2.toDateString();

  let days = "";

  // this is for creating div for previous months days.

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    monthDays.innerHTML = days;
  }

  // this is for creating div for current months days.

  for (let i = 1; i <= monthLastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
    monthDays.innerHTML = days;
  }

  // this is for creating div for next months days.

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

// this is for calling prev month

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  date2.setMonth(date2.getMonth() - 1);
  renderCalendar();
});

// this is for calling next month

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  date2.setMonth(date2.getMonth() + 1);
  renderCalendar();
});

// this is for calling executing main function

renderCalendar();