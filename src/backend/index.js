const winston = require('winston');
const DeviceDetector = require('node-device-detector');

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
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/combined.log'})
    ]
});

//console.log('result parse', detector.detect(userAgent));
//logger.info(deviceInfo());