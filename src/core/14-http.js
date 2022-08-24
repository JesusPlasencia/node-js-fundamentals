#!HTTP
const http = require("http");

function route(request, response) {
  console.log("New Request");
  console.log(request.url);
  //Response to user
  switch (request.url) {
    case "/hola":
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("Hola, amigo");
      response.end();
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Error 404");
      response.end();
      break;
  }
}

http.createServer(route).listen(3000);

console.log("Listening in the Port 3000");
