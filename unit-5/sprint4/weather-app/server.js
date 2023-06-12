const express = require('express');
const {connection} = require('./db');
const {redisConnect} = require('./redis');
const {userRouter} = require('./routes/user.route');
const { weatherRouter } = require('./routes/weather.route')
const winston = require('winston');
const {limiter} = require('./middleware/ratelimit')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
logger.log({
    level:'error',
})
logger.log({
    
    level: 'info',

});



const app = express();
app.use(express.json());

app.use('/user',userRouter);
app.use('/weather',weatherRouter);

app.listen(8080,async()=>{
    await redisConnect
    await connection
    console.log("connected at 8080");
})