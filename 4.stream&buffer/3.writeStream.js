//writing stream so first , we will read all the contents of the file and duplicate the same file content in another file.
const fs = require('fs');

const readStream = fs.createReadStream(
    './data.txt'
);

const writeStream = fs.createWriteStream('data2.txt') //should be new output file

readStream.on('data', (buffer) => {
    console.log(buffer);
    writeStream.write(buffer);
    console.log('new file with same content from data.txt created')
})
