let http = require("http");
let fs = require('fs')
let url = require('url')

http.createServer((req, resp) => {
    // http://127.0.0.1:8081/home.html
    // http://127.0.0.1:8081/about.html
    let q = url.parse(req.url);

    fs.readFile("." + q.pathname, (err, data) => {
        if (err) {
            fs.readFile('./404.html', (err, data) => {
                resp.writeHead(404, { 'Content-Type': 'text/html' })
                resp.write(data.toString())
                resp.end()
            })
        } else {
            resp.writeHead(200, { "Content-Type": "text/html" })
            resp.write(data.toString());
            resp.end();
        }
    })



    // ./home.html, ./about.html

    // error | 404.html

})
    .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");