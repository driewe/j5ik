var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    // once the board object has emitted the ready event,
    // we can initialize an instance of the Switch class
    // to interact with our hardware:
    var led = new five.Led("b5");
    var spdt = new five.Switch("a5");
    spdt.on("close", () => led.on());
    spdt.on("open", () => led.off());
});
