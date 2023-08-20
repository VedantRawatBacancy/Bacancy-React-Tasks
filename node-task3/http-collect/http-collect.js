const http = require("http");
const { BufferList } = require("bl");

const bl = BufferList();

http
  .get(process.argv[2], function (response) {
    response.setEncoding("utf8");
    response.on(bl.append(Buffer.from('data')));
    // response.on("error", console.error);
    console.log(bl)
  })
  .on("error", console.error);
