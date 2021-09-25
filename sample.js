var http=require("http");

var server = http.createServer(function(request,response)
{
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<h1>Hello world</h1>");
    console.log("Request received");
});
server.listen(8000);
console.log("server running");