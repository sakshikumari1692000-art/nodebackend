const http = require("http");

//web server
const server = http.createServer((req, res) =>{
  if(req.url === "/"){
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to the Home Page</h1>");
    res.end();
    return;
  }
  if(req.url === "/source-code"){
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome to the Source Code Page</h1>");
    res.end();
    return;
  }
  if(req.url === "/contact"){
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to the Contact Page");
    res.end();
    return;
  }
});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});