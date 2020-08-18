const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("Error");
  }
  console.log('Async', data.toString('utf8'));
});

const file =  fs.readFileSync('./hello.txt');

console.log('Sync', file.toString())