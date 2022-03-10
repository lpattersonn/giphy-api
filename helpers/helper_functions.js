// Convert data and time to year
const getYear = function (date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  return year;
};

console.log(getYear("2016-08-04 21:59:22"));
