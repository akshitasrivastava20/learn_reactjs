import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

import { CardWrapper } from "./components/CardWrapper"


function App() {
    
 return (
    <>
    <button >1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
  
    <Todo id='694b8ce7c61ca4a6671740a8'/>

    </>
  )}
  
function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3000/todo/${id}`)
      .then((res) => {
        setTodo(res.data.todo); // must be an object
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}


  

export default App
