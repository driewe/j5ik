var Tessel = require("tessel-io");
var five = require("johnny-five");

var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    // After the board is ready, a new Led.RGB is instantiated.
    // We need to tell Johnny-Five which pins each of the RGB LED’s
    // colors are connected to:
    var led = new five.Led.RGB({
      pins: {
          red: "a5",
          green: "a6",
          blue: "b5",
        }
    });

    var index = 0;
    var rainbow = ["white", "black", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    board.loop(500, () => {
        led.color(rainbow[index]);
        index = index + 1;
        if (index === rainbow.length) {
            index = 0;
        }
    });
});
