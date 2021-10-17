const express = require('express');
const app = express();
const winston = require('winston');
const DeviceDetector = require('node-device-detector');

<<<<<<< HEAD
const detector = new DeviceDetector;
/** Native NodeJS */
var http = require('http');
var server = http.createServer(function(req) {
    console.log(detector.detect(req.headers['user-agent']));
    console.log('Logging results...');
    logger.info(detector.detect(req.headers['user-agent']));
    console.log('Logging complete');
    });

server.listen(3000, 'localhost');


const logger = winston.createLogger({
    format: winston.format.json(),
=======
const port = 5000;

const detector = new DeviceDetector;

const logger = winston.createLogger({
    format: winston.format.json({ replacer: null, space: 2 }), // format newlines in log
>>>>>>> Kenny
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/combined.log'})
    ]
});

<<<<<<< HEAD
//console.log('result parse', detector.detect(userAgent));
//logger.info(deviceInfo());
=======
logger.info("Logger activated");

// HTTP POST REQUEST; POST METADATA FROM FRONTEND TO BACKEND; PROCESS AND LOG TO FILE
app.post('/data', function (req, res) {
  try {

    const data = req.body;
 
    logger.info(data);
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})
>>>>>>> Kenny
