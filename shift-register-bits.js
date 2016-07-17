<<<<<<< HEAD
var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var register = new five.ShiftRegister({
        pins: {
            clock: "a5",
            data: "a3",
            latch: "a4",
        }
    });

    var output = 0b10000000;

    board.loop(0, () => {
        output = output > 0 ? output >> 1 : 0b10000000;
        register.send(output);
    });
});
=======
var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var register = new five.ShiftRegister({
        pins: {
            clock: "a5",
            data: "a3",
            latch: "a4",
        }
    });

    var output = 0b10000000;

    board.loop(0, () => {
        output = output > 0 ? output >> 1 : 0b10000000;
        register.send(output);
    });
});
>>>>>>> origin/master
