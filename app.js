const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    let file = fs.readFileSync("home.html");
    res.write(file);
  } else if (req.url == "/login" && req.method == "GET") {
    let file = fs.readFileSync("login.html");
    res.write(file);
  } else if (req.url == "/login" && req.method == "POST") {
    // redirect to home page
    res.writeHead(302, { Location: "/" });

    let body = "";
    req.on("data", chunk => {
      body += chunk;
    });
    req.on("end", () => {
      console.log(body);
    });
  }
  res.end();
});

app.listen(8080);
