// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Hi! My name is Harsh Bindal");
//   res.end();
// });

// server.listen(5000);

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my new web page");
  }

  if (req.url === "/about") {
    res.end("Here is our short History!");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem find the page you are looking for</p>
    <a href='/'> Back Home</a>
  `);
});

server.listen(5000);
