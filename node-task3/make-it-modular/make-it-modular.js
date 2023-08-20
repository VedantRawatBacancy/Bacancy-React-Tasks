const filterFn = require("./mymodule.js");
const dir = process.argv[2];
const ext = process.argv[3];

function callback(err, list) {
  if (err) {
    return console.error(err);
  }
  list.forEach(function (file) {
    console.log(file);
  });
}

filterFn(dir, ext, callback);
