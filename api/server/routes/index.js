const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    let results = await db.all();
    response.json(mapBookFromDb(results));
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "server error" });
  }
});

router.get("/withLimit", async (request, response) => {
  try {
    let results = await db.withLimit();
    response.json(mapBookFromDb(results));
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "server error" });
  }
});

const mapBookFromDb = (results) =>
  results.map((book) => ({
    location: book.Location,
    coverFile: book.Cover_File,
    title: book.Title_DistinctivetitlebookCovertitle_TitleText,
    author: book.Contributor1_PersonName
  }));

module.exports = router;
