const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to my website");
  }
  if (req.url === "/about") {
    res.end("about us");
  }
  res.end(`<h1>oops! something went wrong</h1>
    <a href="/">Go back to home page</a>`);
});
server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
