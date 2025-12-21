import { useState } from "react";
function App() {
const [todos,setTodos]=useState([
  {
    title:"hey there",
  description:"greet everyone"
  },
   {
    title:"hey there",
  description:"greet everyone"
  }
])

function addTodo(){
  setTodos([...todos,{
    title:"new todo",
    description:"new description"
  }])
}

  return (
    
   <div>
    <button onClick={addTodo}>Add todo</button>
   {todos.map((todo)=>{
    return <Todo title={todo.title} description={todo.description}></Todo>
    
   })}
   </div>
    
  )
}

function Todo(props){
 return <div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
 </div>

}

function CustomButton(props){

 function onclickHandler(){
    props.setCount(props.count+1);
  }

  return <button onClick={onclickHandler}>
     Counter {props.count}
  </button>

}

export default App
