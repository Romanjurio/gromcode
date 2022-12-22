//put your code here
// const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

// const dayOfWeek = (date, days) => {
//     const day = new Date(date).getDate();
//     const dateInFuture = new Date(date).setDate(day + days);

//     return weekDays[new Date(dateInFuture).getDay()];
// };


// const result = dayOfWeek(new Date(2019, 0, 1), 14);

// console.log(result);

// const formatter = new Intl.DateTimeFormat('en', {
//   timeZone: 'UTC',
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false
// });

// const getGreenwichTime = date => formatter.format(date);

// console.log(getGreenwichTime(new Date()));

//put your code here
const getDiff = (startDate, endDate) => {
  let delta = Math.floor((endDate - startDate) / 1000);
  const days = Math.floor(delta / 86400);
  delta -= days * 86400;
  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  const seconds = delta % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

console.log(getDiff(new Date(2022, 10, 13, 23, 54), new Date(2022, 11, 14, 22, 5)));