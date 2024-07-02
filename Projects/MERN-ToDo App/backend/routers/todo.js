const {createTodo , getTodo , updateTodo , deleteTodo} = require("../controllers/todo");
const express = require("express");

const router = express.Router();

//post
router.post("/", createTodo);

//get
router.get("/", getTodo);

//put
router.put("/", updateTodo);

//delete
router.delete("/", deleteTodo);


module.exports = router;