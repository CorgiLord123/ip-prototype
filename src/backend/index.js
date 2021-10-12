const express = require('express');
const app = express();
const winston = require('winston');

const port = 5000;


const logger = winston.createLogger({
    format: winston.format.json({ replacer: null, space: 2 }), // format newlines in log
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

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

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`)
})