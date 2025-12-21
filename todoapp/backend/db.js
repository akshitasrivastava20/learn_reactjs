const mongoose=require('mongoose');
const { title } = require('process');


mongoose.connect('mongodb+srv://akshitasrivastava1505_db_user:CRVaiAyEtMguUkHd@todoapp.xk1rs2b.mongodb.net/todoapp');

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}

