const path = require("node:path");
const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/author", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.statusCode || 500).send(err.message);
})

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server listening on : http://localhost:${PORT}`)
);

// async function serve(res, viewName) {
//   const viewPath = path.join(__dirname, viewName);
//   try {
//     const contents = await readFile(viewPath);
//     res.setHeader('Content-Type', 'text/html');
//     res.statusCode = viewName === "/views/404.html" ? 404 : 200;
//     res.se(contents);
//   } catch (err) {
//     res.statusCode = 500;
//     res.end('Server Error');
//   }
// }

// const server = http.createServer((req, res) => {
//   const myUrl = new URL(req.url, `http://${req.headers.host}`);
//   let viewName;
//   switch (myUrl.pathname) {
//     case ("/"):
//         viewName = "/views/index.html";
//         serve(res, viewName);
//         break;
//     case ("/about"):
//         viewName = "/views/about.html";
//         serve(res, viewName);
//         break;
//     case ("/contact-me"):
//         viewName = "/views/contact-me.html";
//         serve(res, viewName);
//         break;

//     default:
//         viewName = "/views/404.html";
//         serve(res, viewName);
//         break;
//   }

// });

// server.listen(8080, () => console.log("server running"));
