const express = require("express");
const app = express();
const logger = require("./logger-middleware");
const authorize = require("./authorize");

// req => middleware => res
app.use([logger, authorize]);
// api/home/about/product

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.users);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000....");
});
