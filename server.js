var http=require('http');
http.createServer(function (req, res) {
// add a HTTP header.
res.writeHead(200, {'Content-Type':"text/html"});
res.write('Hello World!');
res.end();
}).listen(80)
console.log("check http://127.0.0.1:80/");
