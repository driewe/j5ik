var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    // Once the board has emitted the ready event,
    // instantiate a new Leds object and a variable
    // called index, with an initial value of 0:
    var leds = new five.Leds(["a5", "a6", "b5"]);
    var index = 0;
    //  create a function called fader
    var fader = () => {
        if (index < leds.length) {
            // When fadeIn is finished it calls fader(), this is known
            // as asynchronous recursion.
            leds[index++].fadeIn(1000, fader);
        }
    };

    fader();

});
