import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

import { CardWrapper } from "./components/CardWrapper"


function App() {
    const[id,setId]=useState('694b8ce7c61ca4a6671740a8')
 return (
    <>
    <button onClick={()=>{
      setId('694b8ce7c61ca4a6671740a8')
    }}>1</button>
    <button onClick={()=>{
      setId('694b8d25c61ca4a6671740aa')
    }}>2</button>
    <button onClick={()=>{
      setId('694b8d48c9e5855ece5350ea')
    }}>3</button>
    <button onClick={()=>{
      setId('694b8dedb24b98c477c2b4a6')
    }}>4</button>
  
    <Todo id={id}/>

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
