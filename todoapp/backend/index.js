const express=require('express');
const app=express();
const{createTodo,updateTodo}=require('./types');
const { title } = require('process');
const { todo } = require('./db');
const cors=require('cors');
const PORT=process.env.PORT


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.get("/todos",async(req,res)=>{
   const todos= await todo.find({});
   res.json({todos})
})

app.post("/todo",async(req,res)=>{
  const createPayload=req.body;
  const parsedPayload=createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
        msg:"some invalid type"
    })
    return;
  }
  //create the toto in mongodb
  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false
  })
  res.json({
    msg:"todo created"
  })

})
app.put("/completed",async(req,res)=>{
   const updatePayload=req.body;
   const parsedPayload=updateTodo.safeParse(updatePayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"some invalid type"
    })
    return;
  }
  //put in mongodb
  await todo.update({
    _id:req.body.id
  },{
    completed:true
  })

  res.json({
    msg:"task completed"
  })



})
app.listen(PORT || 3000, () => {
    console.log("listening ");
});