var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var leds = new five.Leds(["a5", "a6", "b5"]);
    var index = 0;

    var fader = () => {
        if (index > 0) {
          leds[index - 1].fadeOut(1000);
        }
        if (index < leds.length) {
            leds[index++].fadeIn(1000, fader);
        }
    };
    fader();
    index = 0;
    fader();
});
