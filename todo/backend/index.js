const express = require('express');
const app = express();
const {todo}=require('./db')
const cors=require('cors')
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173'
}))


//get all the todos
app.get('/todos',async(req,res)=>{
    const todos= await todo.find({})
    res.json({todos});
})

app.get('/todo/:id',async(req,res)=>{
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.json({
            msg:"invalid object id"
        })
    }
    const todoitem=await todo.findById(id)
    res.json({todo:todoitem});
})
//create a new todo
app.post('/todos',async(req,res)=>{
await todo.create({
      
        title:req.body.title,
        description:req.body.description
    })

    res.json({
        msg:"successfull"
    })
    
})




app.listen(3000, () => {
    console.log('server is listening');
});