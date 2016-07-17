var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
     // ...this will execute when the board emits the `ready` event
  var led = new five.Led("a5");
  led.pulse(500);
});
