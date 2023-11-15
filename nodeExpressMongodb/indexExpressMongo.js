import mongoose from "mongoose";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt  from "bcrypt";
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
    email:String,
    password:String,
})

const User = mongoose.model.User || mongoose.model("User",userSchema);








app.use(express.urlencoded({ extended: true })); // post from data
app.use(express.static(path.join(path.resolve(), "pubic"))); // add static file
app.use(cookieParser())


app.get("/", async (req, res) => {
  //res.render("index.ejs");
  //res.redirect('/signIn');
  const token = req.cookies.token;
  console.log(token);
  if(token){
    const decode = jwt.verify(token , 'FIROJ');
    
    console.log(decode.id);
     req.user1= await User.findOne({_id:decode.id});
    //console.log(req.user);
    res.render("logOut.ejs",{name:req.user1.name , email:req.user1.email});
  }
  else{
    res.render("logIn.ejs")
  }

});


app.get("/signIn", (req, res) => {
  res.render("signIn.ejs");
});
app.post("/signIn", async (req, res) => {
  /*res.send(
    `<h1>   Registation Done ${req.body.name} . Your Email is ${req.body.email} </h1>`
  ); */
  //console.log(req.body);
  const hashPassword = await bcrypt.hash(req.body.password,10);
  const user = ({
    name:req.body.name,
    email:req.body.email,
    password:hashPassword,
  })
  const user1= await User.findOne({email:user.email});
  //console.log(user1);
  if(user1) return res.redirect("/logIn");
  const user2 = await User.create(user);
  const token =  jwt.sign({ id: user2._id }, 'FIROJ');
  res.cookie("token" , token , {
    expires: new Date(Date.now()+1000*60*5),
    httpOnly:true
  })
  res.redirect("/");

});


app.get("/logIn", (req, res) => {
  res.render("logIn.ejs");
});
app.post("/logIn", async (req, res) => {
  const email=req.body.email;
  const password =req.body.password;

  const user1= await User.findOne({email});

  if(!user1) return res.redirect("/signIn");

  const isPasswordMatch = await bcrypt.compare(password , user1.password);
  

  if(!isPasswordMatch) return res.redirect("/logIn" , {msg:"invalid userName or Password "});

  //if(isPasswordMatch) return res.redirect("/logOut");

  const token = jwt.sign({ id: user1._id }, 'FIROJ');
  res.cookie("token" , token , {
    expires: new Date(Date.now()+1000*60*50),
    httpOnly:true
  })
  res.redirect("/");

});

app.get("/logOut", (req, res) => {
  //
  res.cookie("token" , null , {
    expires: new Date(Date.now()),
    httpOnly:true
  })
  res.redirect('/');
  
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
