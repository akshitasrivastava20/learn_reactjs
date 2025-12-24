const mongoose=require('mongoose');
const { title } = require('process');

mongoose.connect('mongodb+srv://akshitasrivastava1505_db_user:y8nBpvbUxTueruPS@cluster0.yqxwxat.mongodb.net/todoapp=Cluster0');

const todoSchema=mongoose.Schema({
    title:String,
    description:String
})

const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo
}

// y8nBpvbUxTueruPS