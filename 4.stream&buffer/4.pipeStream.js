const fs = require('fs');

const readfileStream = fs.createReadStream('./data.txt');
const writeFileStream = fs.createWriteStream('pipe.txt');

readfileStream.pipe(writeFileStream);