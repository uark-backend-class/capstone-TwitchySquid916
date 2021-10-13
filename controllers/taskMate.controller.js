const activeUser = require("../models/User");


//f(x)'s for different routes, on export obj && use async
// /login will need :: validate credentials login & redirect if authenticated && a forgot password f(x) && agreements to use (no deleting, wm gets records stuff)
// /convoList will need :: a scroll f(x)? a redirect to settings && convos
// /convoStarter will need :: a scroll f(x) & list f(x) for associates employeed in store(tmat) && a select & confirm f(x)
// /:id convo will need :: a (review before sending- no deleting) messaging between 2 parties f(x) you and multiple others maybe && a mic f(x) *use audio data && a task & back redirect
// /taskMe will need:: a chat add(review before sending) and scroll f(x) && a pic uploader  && person for task picker(/:id)
// /updateMe will need:: a commenter with emojis && an update f(x) to take task off list && an alert f(x) to call for help

//login render page
exports.loginPage = async (req,res) => {
    res.render("login")
};

exports.termsOfService = async (req,res) => {
    res.render("termsOfService")
};

exports.login = async (req,res) => {
    res.render("login")
};

exports.convoList = async (req,res) => {
    res.render("convoList")
};

exports.signUp = async (req,res) => {
    res.render("SignUp")
};

/*exports.signUpUser = async (req,res) => {
    if (req.body.id){
        //link to db here
    }
}*/

exports.usersList = async (req,res) => {
    res.render("usersList")
};

exports.returnToConvoList = async (req,res) => {
    res.render("convoList")
};

exports.settings = async (req,res) => {
    res.render("settings")
};