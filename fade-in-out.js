var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
    var leds = new five.Leds(["a5", "a6", "b5"]);
    var index = 0;

    var fader = () => {
        // leds[index] has its fadeIn method invoked. fadeIn is told to
        // take 1000 milliseconds (a second) to do the fading. A callback
        // function is provided for fadeIn to invoke once the fading-in is
        // all done. In this callback function, fadeOut is invoked on
        // leds[index] (and index is incremented). The fading-out is set to
        // take one second, and told to invoke fader when it’s through,
        // starting the whole cycle again on the next index.
        if (index < leds.length) {
            leds[index].fadeIn(1000, () => {
                leds[index++].fadeOut(1000, fader);
            });
        }
    };
    fader();
});
