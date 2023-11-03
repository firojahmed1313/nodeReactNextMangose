const express = require("express")
//const registerUser=require("./userControler");

const router = express.Router();
const {registerUser,getUserData}=require("./userControler");

router.route("/api/v1/register").post(registerUser);
router.route("/api/v1/data").get(getUserData);
console.log("userRoute");
module.exports = router;