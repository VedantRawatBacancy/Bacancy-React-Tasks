const http = require('http')
const bl = require('bl')

const args = process.argv[2];

http.get(args, function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})