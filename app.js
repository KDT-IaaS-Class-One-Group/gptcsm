// require http
const http = require("http");
const contenType = require("./mod/contenType");
const entryRoute = require("./route/route");
const {} = require()
// port
let port = 3217;

// route
const serv = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      entryRoute()
    } else if (req.url === "./doc/index.css") {
      route.handleStyles(req, res);
    } else if (req.url === "./doc/index.js") {
      route.handleScript(req, res);
    }
  }
})

serv.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});