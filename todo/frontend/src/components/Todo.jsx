import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"



export function Todo({id}){
  const[todo,setTodo]=useState({});
  useEffect(()=>{
   
    axios.get(`http://localhost:3000/todo/${id}`)
    .then((res)=>{
      setTodo(res.data.todo)
    })
  },[id])

 
  
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>

}
