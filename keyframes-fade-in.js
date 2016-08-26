var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var led = new five.Led("a5");
    var animation = new five.Animation(led);

    animation.enqueue({
        duration: 2000,
        keyFrames: [
            { intensity: 0 },
            { intensity: 100}
        ],
        oncomplete() {
            console.log("Done!");
        }
    });
});
