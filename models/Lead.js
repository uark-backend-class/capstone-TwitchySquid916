const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Associate = require("./Associate");

const leadSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        associates: [Associate]
    },
);

leadSchema.plugin(passportLocalMongoose, {usernameField: "name"});

const Lead = mongoose.model("lead", leadSchema);

module.exports = Lead;