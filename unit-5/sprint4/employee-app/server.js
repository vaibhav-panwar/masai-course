const express = require('express');
const { connection} = require('./db');
const { employeeRouter } = require('./routes/employee.route');
const { leaveRouter } = require('./routes/application.route');
const winston = require('winston');
const app = express();
app.use(express.json());

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

app.use("/employee",employeeRouter);

app.use('/',leaveRouter);

app.listen(8080,async()=>{
    await connection
    console.log("connected at 8080");
})