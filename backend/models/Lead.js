const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({

    name: String,

    company: String,

    email: String,

    status: String,

    assignedTo: String

});

module.exports =
    mongoose.model("Lead", leadSchema);