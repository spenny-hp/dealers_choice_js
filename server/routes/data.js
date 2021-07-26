const data = require('./NYC_WaterData.json');

const getData = () => {
    return [...data];
}

const find = (year) => {
    const water = data.find(p => p['Year'] === +year)
    return {...water};
};

module.exports = {
    getData,
    find
};