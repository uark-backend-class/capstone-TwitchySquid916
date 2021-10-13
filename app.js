const express = require('express'); // to do different actions with routes, put/ delete etc
const exphbs = require("express-handlebars"); // to use html
require("./db");
const app = express(); // make our app usable with express f(x)'s

const routes = require("./routes");
app.engine("handlebars", exphbs()); // use express to run html in handlebars files
app.set("view engine","handlebars"); // use handlebars files in our views engine (setting up our view)
app.use(express.urlencoded()); // recognize the data coming in as strings/arrays from the form in handlebars
app.use(express.static("/public"));// serves up the css MAKE SURE ITS ON THE ROOT ROUTE!!
app.use(routes);


app.listen(3000,()=> {
    console.log("Now listening on port 3000");
})
