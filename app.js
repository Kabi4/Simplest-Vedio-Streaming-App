const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  const rs = fs.createReadStream(path.join(__dirname, "Stream.mp4"));

  rs.pipe(res);
});

app.get("*", (req, res) => {
  res.status(404).send("Path not defined!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listeing on server on port ${process.env.PORT || 3000}`);
});
