// Convert data and time to year
const getYear = function (date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  return year;
};

// Formate data received from api request
const dataFormat = function (arr) {
  let dataOutput = {};
  for (let element of arr) {
    let year = getYear(element.import_datetime);
    if (!dataOutput[year]) {
      dataOutput[year] = [];
    }
    if (dataOutput[year]) {
      dataOutput[year].push(element.images.fixed_width.url);
    } 
  }
  return dataOutput;
};

module.exports = { getYear, dataFormat };
