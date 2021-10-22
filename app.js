const express = require("express");
const routes = require("./routes");
const exphbs = require("express-handlebars");
const Lead = require("./models/Lead");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
require("./db");

passport.use(Lead.createStrategy());

passport.serializeUser((lead, done) =>{
  done(null,lead._id);
});

passport.deserializeUser(async (id, done) => {
  const lead = await Lead.findById(id); 
  done(null, lead);
});

const app = express();
app.use(
  session({
    secret: "kayboard-cat-diamonds"
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded());
app.use(express.static("./public"));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log("Now listening on port 3000");
});