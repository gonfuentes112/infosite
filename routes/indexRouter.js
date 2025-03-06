const path = require("path");
const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "about.html"));
});
indexRouter.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "contact-me.html"));
});
indexRouter.post("/contact-me", (req, res) => {
  res.send("email sent");
});

indexRouter.get("/contact", (req, res) => {
  res.redirect("contact-me");
});

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"]

indexRouter.get("/", (req, res) => {
  res.render("index", {links: links, users: users});
});

module.exports = indexRouter;
