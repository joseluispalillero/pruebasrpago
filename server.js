if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const server = express();

const connectDB = require("./db/connect");
connectDB();

const port = process.env.PORT || 4040;

server
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors());

server
  .get("/frauds", routes.frauds.getAll)
  .get("/frauds/:id", routes.frauds.getById)
  .get("/stats", routes.stats);

server.post("/frauds", routes.frauds.check);

server.listen(port, () => {
  console.log("Server is listening on port:", port);
});
