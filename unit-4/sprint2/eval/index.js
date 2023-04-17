const express = require('express');
const fs = require('fs');
var morgan = require('morgan');
var path = require('path');



const app = express();
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs.txt'), { flags: 'a' });
app.use(morgan(':method :url :user-agent', { stream: accessLogStream }))
app.use(express.json());

app.get("/", (req, res) => {
    res.header("content-type", "text/html");
    res.send("<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>")
})

app.get("/marvel", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    if (req.query.alias == undefined) {
        res.send(data.marvel);
    }
    else {
        let filtered = data.marvel.filter((el) => {
            if (el.alias.toLowerCase() == req.query.alias.toLowerCase()) {
                return true
            }
            return false
        })
        let a = filtered[0]
        res.send(a)
    }
})

app.post("/marvel/addnew", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.marvel.push(req.body);
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
        res.send("New superhero has been added")
    } catch (error) {
        res.send(error);
    }
})

app.get("/marvel/:id", (req, res) => {
    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let filtered = data.marvel.filter((el) => {
        if (el.id == id) {
            return true
        }
        return false
    })
    let a = filtered[0];
    res.send(a);
})

app.patch("/marvel/update/:id", (req, res) => {
    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.marvel.forEach((el) => {
        if (el.id == id) {
            el.name = req.body.name;
            el.alias = req.body.alias;
            el.power_level = req.body.power_level;
            el.role = req.body.role;
        }
    })
    fs.writeFileSync("db.json", JSON.stringify(data));
    res.send("Patched Character Details");
})

app.delete("/marvel/delete/:id", (req, res) => {
    let id = req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.marvel = data.marvel.filter((el) => {
        if (el.id == id) {
            return false
        }
        return true
    })
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Deleted Character Details");
})

app.get("/dc", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    if (req.query.alias == undefined) {
        res.send(data.dc);
    }
    else {
        let filtered = data.dc.filter((el) => {
            if (el.alias.toLowerCase() == req.query.alias.toLowerCase()) {
                return true
            }
            return false
        })
        let a = filtered[0]
        res.send(JSON.stringify(a))
    }
})

app.post("/dc/addnew", (req, res) => {
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.dc.push(req.body);
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
        res.send("New superhero has been added")
    } catch (error) {
        res.send(error);
    }
})

app.get("/dc/:id", (req, res) => {
    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let filtered = data.dc.filter((el) => {
        if (el.id == id) {
            return true
        }
        return false
    })
    let a = filtered[0]
    res.send(a);
})

app.patch("/dc/update/:id", (req, res) => {
    let id = req.params.id;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.dc.forEach((el) => {
        if (el.id == id) {
            el.name = req.body.name;
            el.alias = req.body.alias;
            el.power_level = req.body.power_level;
            el.role = req.body.role;
        }
    })
    fs.writeFileSync("db.json", JSON.stringify(data));
    res.send("Patched Character Details");
})

app.delete("/dc/delete/:id", (req, res) => {
    let id = req.params.id
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.dc = data.dc.filter((el) => {
        if (el.id == id) {
            return false
        }
        return true
    })

    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Deleted Character Details");
})

app.get("/winningteam", (req, res) => {
    let msum = 0; let dsum = 0;
    let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.marvel.forEach((el) => {
        msum += el.power_level;
    })
    data.dc.forEach((el) => {
        dsum += el.power_level;
    })
    if (msum >= dsum) {
        res.send(data.marvel);
    }
    else {
        res.send(data.dc);
    }
})
// app.listen(8080)

// Do not forget to export the server.
// e.g =>
 module.exports = app;
