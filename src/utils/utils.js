const fs = require('fs');

const saveToDB = (data) => {
    fs.writeFileSync('./src/database/db.json', JSON.stringify(data, null, 2), {encoding: 'utf8'});
};

module.exports = { saveToDB };