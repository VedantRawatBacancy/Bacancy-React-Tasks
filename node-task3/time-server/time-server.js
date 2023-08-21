const net = require("net");

function addZero(i){
    if(i<10){
        return "0" + i
    }
    else{
        return i
    }
}

function dateFunction () {
  const d = new Date()
  return d.getFullYear() + '-'
    + addZero(d.getMonth() + 1) + '-'
    + addZero(d.getDate()) + ' '
    + addZero(d.getHours()) + ':'
    + addZero(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(dateFunction() + '\n')
})

server.listen(Number(process.argv[2]))