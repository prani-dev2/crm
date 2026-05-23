const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const leadRoutes = require("./routes/leadRoutes");

const app = express();

const authRoutes =
require("./routes/authRoutes");

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/bdaDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.use("/api/leads", leadRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.listen(5000, () => {
    console.log("Server Started");
});

