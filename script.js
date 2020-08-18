const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("Error");
  }
  console.log("Async", data.toString("utf8"));
});

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// Append
fs.appendFile("./hello.txt", " This is so cool!", (err) => {
  console.log(err);
});

// Write
fs.writeFile("bye.txt", "See you later", (err) => {
  console.log(err);
});

// Delete
fs.unlink("./bye.txt", (err) => {
  console.log(err);
});
