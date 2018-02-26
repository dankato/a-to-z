const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, error => {
  if (error) throw error;
  console.log("server is running on", port);
});
