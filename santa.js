const fs = require("fs");

fs.readFile("./santaInput.txt", (err, data) => {
  if (err) {
    console.log("Error");
  }
  let up = 0;
  let down = 0;
  let foundElement = false;

  const stringData = data.toString("utf8").trim();
  [...stringData].forEach((element, i) => {
    if (element === "(") {
      up = up + 1;
    } else if (element === ")") {
      down = down + 1;
    }
    if ( ((up - down) < 0) && !foundElement) {
        console.log(up - down, i + 1);
        foundElement = true;
    }
  });

  console.log(up - down);
});
