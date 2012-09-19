var app = require('http').createServer(handler)
, io = require('socket.io').listen(app)
, fs = require('fs')

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor
var data = '0';

// change to your serial port!
var sp = new SerialPort("/dev/tty.usbmodemfd121", { 
  parser: serialport.parsers.readline("\n") 
});

io.sockets.on('connection', function (socket) {
  sp.on("data", function (data) {
    socket.emit('news', { light: data });
  });
});


