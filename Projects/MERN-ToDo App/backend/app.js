const express = require("express");
const mongoose = require("mongoose");
const todoRouter =  require("./routers/todo");

const app = express();
app.use(express.json());

app.use("/",todoRouter);


app.listen(3000,);