const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    let file = fs.readFileSync("home.html");
    res.write(file);
  } else if (req.url == "/login") {
    res.write("<html>");
    res.write("<head><title>LOGIN</title></head>");
    res.write("<body>");
    res.write("<h1>THIS IS THE LOGIN PAGE</h1>");
    res.write("</body>");
    res.write("<html>");
  }
  res.end();
});

app.listen(8080);
