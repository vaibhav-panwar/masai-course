const {sequelize} = require("./models");
const express = require('express');
const {empRoute} = require('./routes/employee.route');
const {deptRoute} = require('./routes/departement.route');

const app = express();
app.use(express.json());

app.use('/api',empRoute);
app.use('/api',deptRoute);

sequelize.sync().then(()=>{
    app.listen(8080,()=>{
        console.log("server started at port 8080");
    })
})