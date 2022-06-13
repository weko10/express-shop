const http = require("http");
const fs = require("fs");

const app = http.createServer();

app.on("request", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  let url = req.url;
  let method = req.method;

  if (url === "/") {
    let file = fs.readFileSync("home.html");
    res.write(file);
    return res.end();
  } else if (url === "/login" && method === "GET") {
    let file = fs.readFileSync("login.html");
    res.write(file);
    return res.end();
  } else if (req.url === "/login" && req.method === "POST") {
    // recieve and parse body
    const body = [];
    req.on("data", chunk => body.push(chunk));
    req.on("end", () => {
      let parsedBody = Buffer.concat(body).toString() + "\r\n";
      fs.writeFile("data.txt", parsedBody, { flag: "a+" }, () => {
        // redirect to home page
        res.writeHead(302, { Location: "/" });
        return res.end();
      });
    });
  } else {
    // not found
    res.writeHead(404);
    return res.end();
  }
});

app.listen(8080);
