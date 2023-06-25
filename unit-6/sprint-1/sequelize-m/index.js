const {sequelize} = require('./models');
const express = require('express');
const {studentRoute} = require('./routes/students.route');
const {batchRoute} = require('./routes/batches.route');


const app = express();
app.use(express.json());

app.use('/api',studentRoute);
app.use('/api',batchRoute);

sequelize.sync().then(()=>{
    app.listen(8080,()=>{
        console.log("server started at 8080");
    })
})