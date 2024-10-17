const express = require("express");
const app = express();
const port = 3000;

app.listen(port);
console.log(`Server is running on port ${port} at http://localhost:${port}`);

app.get("/health", (req, res) => {
  res.send("OK");
  res.status(200);
});

app.get("/", (req, res) => {
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}`);
});
