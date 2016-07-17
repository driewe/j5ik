var five = require("johnny-five");
var Tessel = require("tessel-io");

var board = new five.Board({
    io: new Tessel()
});

board.on("ready", function() {
    var register = new five.ShiftRegister([ "a3", "a5", "a4" ]);
    var output = 0b00000000;
    board.loop(100, () => {
        register.send(output);
        output++;
        if (output > 0b11111111) {
            output = 0b00000000;
        }
    });
});
