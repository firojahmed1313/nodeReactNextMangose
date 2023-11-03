const express = require("express");
const path = require("path");
const bodyPerser = require("body-parser");
const router = require("./userRoute");

const app = express();
const port = 3000;

app.use(bodyPerser.urlencoded({ extended: true }));
app.use("/",router);


app.get("/", (req, res) => {
  res.send("<h1>   MD FIROJ AHMED  </h1>");
});
app.post("/", (req, res) => {
  res.send(
    `<h1>   Registation Done ${req.body.name} . Your Email is ${req.body.email} </h1>`
  );
  console.log(req.body);
});
app.get("/home", (req, res) => {
  res.send("<h1>   HOME PAGE  </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>   ABOUT PAGE  </h1>");
});
app.get("/signIn", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/contact", (req, res) => {
  res.send("<h1>   CONTACT PAGE  </h1>!");
});
//app.get("/api/v1/data", );
//app.post("/api/v1/register",);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
