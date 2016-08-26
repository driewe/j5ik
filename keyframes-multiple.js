var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
    io: new Tessel()
});

board.on("ready", () => {
    var leds = new five.Leds(["a5", "a6", "b5"]);
    var animation = new five.Animation(leds);

    var animateForever = () => {
        // Add a leds to the animation's queue
        animation.enqueue({
            duration: 2000,
            cuePoints: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1.0],
            keyFrames: [
                [ {intensity: 0},   {intensity: 0},     {intensity: 0},     {intensity: 0},   {intensity: 100},   {intensity: 100},   {intensity: 100}, {intensity: 100}],
                [ {intensity: 0},   {intensity: 0},   {intensity: 100},   {intensity: 100},     {intensity: 0},     {intensity: 0},   {intensity: 100}, {intensity: 100}],
                [ {intensity: 0}, {intensity: 100},     {intensity: 0},   {intensity: 100},     {intensity: 0},   {intensity: 100},     {intensity: 0}, {intensity: 100}],
            ],
            oncomplete() {
                console.log("Do it again!");
                animateForever();
            }
        });
    };
    animateForever();
});
