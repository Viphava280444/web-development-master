let http = require("http");
let fs = require('fs')


http.createServer((req, resp) => {
    fs.readFile('./demo.html', (err, data) => {
        if (err) console.log('Error');
        resp.writeHead(200, { "Content-Type": "text/html" })
        resp.write(data);
        resp.end()
    })

})
    .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");