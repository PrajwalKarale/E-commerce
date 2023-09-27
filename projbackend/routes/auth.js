var express = require("express");
var router = express.Router();
const {check, validationResult} = require('express-validator');
const {signout, signup, signin, isSignedIn} = require("../controllers/auth");

router.post("/signup",[
    check("name").isLength({ min: 3 }).withMessage("Name should be atleast 3 characters"),
    check("email").isEmail().withMessage("Enter appropriate Email"),
    check("password").isLength({ min: 3 }).withMessage("Password length should be atleast 3 characters")
], 
signup);

router.post("/signin",[
    check("email").isEmail().withMessage("Enter appropriate Email"),
    check("password").isLength({ min: 3 }).withMessage("Please Enter correct password")
], 
signin);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.auth(req.auth);
});

module.exports = router;