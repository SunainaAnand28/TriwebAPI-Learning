const Todo = require("../models/todo");

const createTodo = async  (req,res)=>{
    try{
        const todo = new Todo(req.body);
    const result = await todo.save();
    res.send({
        status: "Success",
        message: "Todo Created Successfully",
        _id: result._id,
    });

    } catch(error){
        res.send({
            status: "Error",
            message: "Todo creation failed",  
            error,
        });
    }

    
};


const getTodo = async  (req,res)=>{
    try{
        
    const todos = await Todo.find({});
    res.send({
        status: "Success",
        message: "Todo Get Successfully",
        data:todos,
    });

    } catch(error){
        res.send({
            status: "Error",
            message: "Todo get failed",  
            error,
        });
    }
    
};


const updateTodo = async  (req,res)=>{
    try{
        const id = req.body._id;
        // record find
    const todo = await Todo.findById(id);
    // change set 
    todo.UserName = req.body.UserName;
    todo.mobile = req.body.mobile;
    // save

    await todo.save();
    res.send({
        status: "Success",
        message: "Todo Update Successfully",
        
    });

    } catch(error){
        res.send({
            status: "Error",
            message: "Todo Update failed",  
            error,
        });
    }
};


const deleteTodo = async  (req,res)=>{
    try{
        const id = req.body._id;
        const todo = await Todo.findById(id);
        
    const result = await todo.delete();
    res.send({
        status: "Success",
        message: "Todo Deleted Successfully",
       
    });

    } catch(error){
        res.send({
            status: "Error",
            message: "Todo deletion failed",  
            error,
        });
    }
};



module.exports = {createTodo , getTodo , updateTodo , deleteTodo};