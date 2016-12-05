/*Instructions
Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
Bonus
Look for other ways to expand what your server can do. As possibilities:
Generate the good / bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet*/

var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
  console.log(request);
    if (request.headers.host == "localhost:7000") response.end("You're awesome");
    if (request.headers.host == "localhost:7500") response.end("You suck!");
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(PORT1, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You're awesome!");
  //document.write("You're awesome");
});

server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You suck!");
  //document.write("You suck");
});