var http = require("http");
var url = require('url');

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    let data = url.parse(req.url, true).query;
    resp.write(`${data.name} ${data.lastname} \n`)
    resp.end("Helloooo World Ok.\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");