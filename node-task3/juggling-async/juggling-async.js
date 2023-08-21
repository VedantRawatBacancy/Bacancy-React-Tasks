const http = require("http");
const bl = require("bl");

let result = [];
let count = 0;

function showResults() {
  for (let i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}

function getResults(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) {
          console.log(err);
        }
        result[index] = data.toString();
        count++;

        if (count === 3) {
          showResults();
        }
      })
    );
  });
}

for (let i = 0; i < 3; i++) {
  getResults(i);
}
