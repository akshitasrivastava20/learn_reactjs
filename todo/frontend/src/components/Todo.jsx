

import React, { useEffect, useState } from "react";


const Todo= function Todo(){
  const [todos,setTodos]=useState(" ")
  useEffect(()=>{
    setInterval(
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async(res)=>{
        const json=await res.json();
        setTodos(json.todos)
    }),1000)
  },[])

function addTodo(){
    setTodos([...todos,{
      
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