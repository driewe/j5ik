var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", function() {
  shiftRegister = new five.ShiftRegister({
    pins: {
      clock: "a5",
      data: "a3",
      latch: "a4",
    }
  });
  var value = 0;
  function next() {
  value = value > 0x11 ? value >> 1 : 0x88;
    shiftRegister.send( value );
    setTimeout(next, 0);
  }
  // Allow interaction
  this.repl.inject({
    sr: shiftRegister
  });

  next();
});
