import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
