import mongoose from "mongoose";
import express from "express";
import path from "path";

const app = express();
const port = 3000;


const url = "mongodb+srv://newgitpods:VL6eb0rHhdZJ1gv0@mdfirojahmed.chpjhjr.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{
    dbName:"connectMongo",

}).then(()=>{
    console.log("Detabase Connected")
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String
})

const User = mongoose.model.User || mongoose.model("User",userSchema);








app.use(express.urlencoded({ extended: true })); // post from data
app.use(express.static(path.join(path.resolve(), "pubic"))); // add static file

app.get("/", (req, res) => {
  res.render("index.ejs");
});


app.get("/signIn", (req, res) => {
  res.render("signIn.ejs");
});
app.post("/signIn", async (req, res) => {
  res.send(
    `<h1>   Registation Done ${req.body.name} . Your Email is ${req.body.email} </h1>`
  );
  console.log(req.body);
  const user = ({
    name:req.body.name,
    email:req.body.email
  })
  await User.create(user);

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
