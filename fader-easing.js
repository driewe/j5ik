var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var leds = new five.Leds(["a5", "a6", "b5"]);
    var duration = 4000;

    var fader = () => {
        if (!easingFunctions.length) {
            process.exit();
        }
        var easing = easingFunctions.shift();
        console.log(easing);
        leds.fadeOut(500, () => {
            leds.fadeIn({ easing, duration }, fader);
        });
  };

    fader();
});

var easingFunctions = [
    "linear",
    "inQuad",
    "outQuad",
    "inCube",
    "outCube",
    "inOutCube",
    "inQuart",
    "outQuart",
    "inOutQuart",
    "inQuint",
    "outQuint",
    "inOutQuint",
    "inExpo",
    "outExpo",
    "inOutExpo",
    "inCirc",
    "outCirc",
    "inOutCirc",
    "inBounce",
    "outBounce",
    "inOutBounce",
    ];
