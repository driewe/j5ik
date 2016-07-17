var request = require('request');
request('http://data.sparkfun.com/input/LQJQ18yNgxC5nn7vMj62?private_key=A141kAYGWKSeddXoGb5r&temp=This&unit=worked!', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
    console.log(response)
  }
})
