/*eslint-env node*/

//------------------------------------------------------------------------------
// hello world app is based on node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');






// create a new express server
var app = express();

// add Bluemix Push

//app.use('', express.static(__dirname + 'BMSPushSDK.js'));



// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});

/**
 * JeffT Adding Hello world for hello endpoint
 */



app.get('/hello', function(req, res) {
    res.send('Hello World for hello endpoint');
});

app.get('/sendHelloPage', function(req, res) {
    console.log("Got a GET request for /sendHelloPage");
    res.send('/public/index.html');
});
/**
 * JeffT Adding Form Handling where the form html was added to index.html
 */

app.get('/process_get', function(req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})