const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const PORT = "8001";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/books", routes);

const server = app.listen(PORT, () => {
  console.log(`server is up and running on http://localhost:${PORT}`);
});

module.exports = { server };
