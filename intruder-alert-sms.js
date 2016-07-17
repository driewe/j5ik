var twilio = require("twilio");
var Tessel = require("tessel-io");
var five = require("johnny-five");
var board = new five.Board({
  io: new Tessel()
});

var accountSid = "AC3cc4c896cf5937ae369ed495e1193966"; // SID copied from www.twilio.com/console
var authToken = "2c011a686379e5c4e49c93ca7f74e9ed"; // token copied from www.twilio.com/console

var sender = "9402203289"; // This is your Twilio phone number
var recipient = "9407654241"; // This is your own mobile phone number

var client = new twilio.RestClient(accountSid, authToken);

board.on("ready", () => {
    var door = new five.Switch({
        pin: "a2",
        invert: true,
    });

    door.on("open", () => {
        var details = {
            body: `Security Breach at ${Date.now()}`,
            from: sender,
            to: recipient,
        };
        client.messages.create(details, error => {
            if (error) {
                console.error(error.message);
            }
            // Success! Nothing else to do
        });
    });
});
