const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const citiesFilePath = path.join(__dirname, 'cities.csv');

function getCities() {
    return new Promise((resolve, reject) => {
        const cities = [];
        fs.createReadStream(citiesFilePath)
            .pipe(csv())
            .on('data', (row) => cities.push(row))
            .on('end', () => resolve(cities))
            .on('error', reject);
    });
}

module.exports = { getCities };