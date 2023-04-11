const http = require("http");
const fs = require("fs");
const PORT = 7700;
// let a = fs.readdirSync("C:/Users/admin/Desktop/masai-course/unit-4/sprint1/day-3/prb2");
// for (let i = 0; i < a.length; i++) {
//         let b = fs.statSync(`C:/Users/admin/Desktop/masai-course/unit-4/sprint1/day-3/prb2/${a[i]}`);

//         if (b.isDirectory()) {
//             let temp = fs.readdirSync(`C:/Users/admin/Desktop/masai-course/unit-4/sprint1/day-3/prb2/${a[i]}`);
//             for (let j = 0; j < temp.length; j++) {
//                 console.log(a[i],temp[j]);
//             }
//             console.log("end---------------------------------------------------------------------")
//         }
       
//     }

const server = http.createServer((req, res) => {
    let link = process.argv[1];
    let a = fs.readdirSync(link);
    res.setHeader('content-type', 'text/html')
    if (req.url == "/") {
        for (let i = 0; i < a.length; i++) {
            res.write(`<li><a href="http://localhost:${PORT}/${a[i]}">${a[i]}</a></li>`)
        }
        return res.end();
    }
    else{
        for (let i = 0; i < a.length; i++) {
            if (req.url == `/${a[i]}`) {
                let b = fs.statSync(`${link}/${a[i]}`);
                if (b.isDirectory()) {
                    let temp = fs.readdirSync(`${link}/${a[i]}`);
                    for (let j = 0; j < temp.length; j++) {
                        res.write(`<li><a href="http://localhost:${PORT}/${a[i]}/${temp[j]}">${temp[j]}</a></li>`)
                    }
                    return res.end()
                }
                else if(b.isFile()){
                    let read = fs.readFileSync(`${a[i]}`,"utf-8");
                    res.end(JSON.stringify(read));
                }
            }
        }
        res.end("404 Not Found");
    }
    
    
}
);
// server.listen(PORT);
// export your server
module.exports = server;
