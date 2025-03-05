const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("All books");
});

bookRouter.get("/:bookId", (req, res) => {
  const { bookId } = req.params;
  res.send(`book ID: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`book ID: ${bookId} may be reserved or not`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookId } = req.params;
  res.send(`book ID: ${bookId} was reserved`);
});

module.exports = bookRouter;
