const passport = require("passport");
const Lead = require("../models/Lead");
const Associate = require("../models/Associate");

exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        next();
    }
    else{
        res.status(401).send(); 
    }
}


exports.registrationPage = (req,res) =>{
    res.render("register");
}

exports.register = async (req, res, next) => {
    const lead = new Lead({ name: req.body.name});
    await Lead.register(lead, req.body.password);
    next();
}

exports.login = passport.authenticate('local', {
    failureRedirect: "/login",
    failureFlash: "Bad username or password!",
    successRedirect: "/secrets",
    successFlash: "You are now logged in!",
});

exports.loginPage = (req, res) => {
    res.render("login", { errorMessages: req.flash('error')});
}

exports.termsOfService = (req,res) =>{
    res.render("termsOfService");
}


exports.associateTasks = async (req,res) =>{
    const associates = await Associate.find().lean();
    /*const lead = await Lead._id.ObjectId().str;
    const associate = await Associate.user.ObjectId().str;
    const found = (lead === associate)*/
    res.render("list-associates-no-edit", { title: "All Associates Task List", associates, /*found*/ });
}



exports.listAssociateNoEdit = (req,res) =>{
    res.render("list-associate-no-edit");
}



exports.associateLogout = (req,res) =>{
    res.render("login");
}

exports.logout = (req,res) => {
    req.logout();
    res.redirect("/login");
}