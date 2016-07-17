var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});
var bitPattern = [128,64,32,16,8,4,2,1,]
board.on("ready", () => {
    var register = new five.ShiftRegister({
        pins: {
            clock: "a5",
            data: "a3",
            latch: "a4",
        }
    });

    var index = 0
    var increment = 1

    board.loop(0, () => {
        register.send(bitPattern[index])
        index = index += increment
        if (index === 7 || index === 0) {
            increment = increment*-1
        };
    });
});
