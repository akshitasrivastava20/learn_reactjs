

import React, { useState } from "react";
let counter=0;

const Todo= function Todo(){
  const [todos,setTodos]=useState([{
    id:counter++,
    title:"hi",
    description:"hey there greets"
  },{
    id:counter++,
    title:"bye",
    description:"farewell greets"
  },
{   id:counter++,
    title:"wassup",
    description:"how are you?"
}])

function addTodo(){
    setTodos([...todos,{
        id:counter++,
        title:"new todo",
        description:"new todo added"
    }])
}
  return <div>
    <button onClick={addTodo}>
        tap to add new
    </button>
   {
    todos.map((todo)=>(
        <div key={todo.id}>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        </div>
    ))
   }
  </div>
}

export default React.memo(Todo);