import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/hey", (req, res) => {
  const path = req.path;
  const response = path.substring(1);
  res.send("You're on page :" + response);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
