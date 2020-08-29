const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello " + req.query.name ? req.query.name : " ");
});

app.get("/users", function (req, res) {
  res.send({ name: "AYush", Age: "21", Gender: "Male" });
});


app.listen(process.env.PORT || 3000);
console.log("Server is running at port 3000");
