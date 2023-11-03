const getUserData = (req, res) => {
    console.log("getUserData");
  res.json({
    name: "MD FIROJ AHMED",
    email: "firojahmed3052000@gmail.com",
    password: "1234567",
  });
};

const registerUser = (req, res) => {
  const username = req.body.name;
  const useremail = req.body.email;
  const userpassword = req.body.password;

  res.json({
    sucess: true,
    name: username,
    email: useremail,
    password: userpassword,
  });
};

module.exports={registerUser,getUserData};
//module.exports=registerUser;