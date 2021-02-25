const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "perlego"
});

let books = {};

books.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT Location, Cover_File, Title_DistinctivetitlebookCovertitle_TitleText, Contributor1_PersonName FROM assessment2",
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
};

books.withLimit = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT Location, Cover_File, Title_DistinctivetitlebookCovertitle_TitleText, Contributor1_PersonName FROM assessment2 LIMIT 25",
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = books;
