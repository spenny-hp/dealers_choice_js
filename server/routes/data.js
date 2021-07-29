const data = require("./NYC_WaterData.json");

// const $ = require("axios");

// const data = [];

// function fetchData() {
//   $.get("https://data.cityofnewyork.us/resource/ia2d-e54m.json").then(function (
//     response
//   ) {
//     Array(response['data']).forEach(el => data.push(el));
//   });
//   console.log(data);
// }

// fetchData();

const getData = () => {
  return [...data];
};

const find = (year) => {
  const water = data.find((p) => p["Year"] === +year);
  return { ...water };
};

module.exports = {
  getData,
  find,
};
