const express = require("express");
const mongoose = require("mongoose");
const todoRouter =  require("./routers/todo");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/",todoRouter);

const uri = "mongodb+srv://MyUser:abcd1234@mycluster.b0zn3ks.mongodb.net/"
mongoose.set("strictQuery", false)
mongoose.connect(uri);

app.listen(3002);
