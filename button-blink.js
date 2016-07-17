var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    // Once the board has emitted the ready event,
    // we can initialize Led and Button instances to
    // interact with our hardware on the specified pins:
    var led = new five.Led("a5")
    var button = new five.Button("a2");
    button.on("press", () => led.on());
    button.on("hold", () => led.blink(500));
    button.on("release", () => led.stop().off());
});
