import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // post from data
//app.use("/",router);
app.use(express.static(path.join(path.resolve(), "pubic"))); // add static file

app.get("/", (req, res) => {
  //res.send("<h1>   MD FIROJ AHMED  </h1>");
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  res.send("<h1>   HOME PAGE  </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>   ABOUT PAGE  </h1>");
});
app.get("/signIn", (req, res) => {
  //res.sendFile(path.join(__dirname + "/index.html"));
  res.render("signIn.ejs");
});
app.post("/signIn", (req, res) => {
  res.send(
    `<h1>   Registation Done ${req.body.name} . Your Email is ${req.body.email} </h1>`
  );
  console.log(req.body);
});
app.get("/contact", (req, res) => {
  //res.send("<h1>   CONTACT PAGE  </h1>!");
  res.json({
    name: "firoj",
  });
});
//app.get("/api/v1/data", );
//app.post("/api/v1/register",);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
