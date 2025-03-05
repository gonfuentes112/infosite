const db = require("db");

async function getAuthorById(req, res) {
  const { authorId } = req.parms;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author name: ${author}`);
}

module.exports = { getAuthorById };
