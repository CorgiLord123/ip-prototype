const express = require('express');
const app = express();
const winston = require('winston');

const port = 5000;


const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

logger.info("Hello, Winston logger, some info!");

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`)
})