const express = require('express');
const cors = require('cors');
const app = express();
const winston = require('winston');
const DeviceDetector = require('node-device-detector');

const port = 5000;

const detector = new DeviceDetector;

app.use(cors());

const logger = winston.createLogger({
    format: winston.format.json({ replacer: null, space: 2 }), // format newlines in log
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

logger.info("Logger activated");

// HTTP POST REQUEST; POST METADATA FROM FRONTEND TO BACKEND; PROCESS AND LOG TO FILE
app.post('/data', async function (req, res) {
  const detector = new DeviceDetector;

  try {

    //let data = req.body.stuff;
    logger.info(detector.detect(req.headers['user-agent']));
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

//app.get('/', function (req, res) {
//    res.send('GET request to the homepage')
 // })

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})
