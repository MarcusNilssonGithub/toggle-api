var express = require("express");
var bodyParser = require('body-parser');
var router = require('./router');

function start(config) {
  var app = express();

  // Set up server configuration
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  // Set up routes (endpoints)
  router(app);

  var port = process.env.PORT || config.port;
  app.listen(port, function () {
    console.log("Server is running. If local, try http://localhost:" + port);
  });
}

module.exports.start = start;

