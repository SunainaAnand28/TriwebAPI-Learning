const mongoose = require("mongoose");

const schema = mongoose.Schema;

const todoSchema = new schema({
    UserName: String,
    mobile: String,

});





const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;