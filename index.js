const http = require("http");
const path = require("path");
const { readFile } = require("node:fs/promises");

async function serve(res, viewName) {
  const viewPath = path.join(__dirname, viewName);
  try {
    const contents = await readFile(viewPath);
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = viewName === "/views/404.html" ? 404 : 200;
    res.end(contents);
  } catch (err) {
    res.statusCode = 500;
    res.end('Server Error');
  }
}

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  let viewName;
  switch (myUrl.pathname) {
    case ("/"):
        viewName = "/views/index.html";
        serve(res, viewName);        
        break;
    case ("/about"):
        viewName = "/views/about.html";
        serve(res, viewName);        
        break;
    case ("/contact-me"):
        viewName = "/views/contact-me.html";
        serve(res, viewName);        
        break;
  
    default:
        viewName = "/views/404.html";
        serve(res, viewName);   
        break;
  }

});

server.listen(8080, () => console.log("server running"));
