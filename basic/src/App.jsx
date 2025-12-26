import {  useState } from "react"


function App() {
  const[count,setCount]=useState(0);
  const [sum,setSum]=useState(0);
  function increment(){
    setCount(count+1)
  }
 
  function calculateSum(num){
    let s=0;
    for(let i=0;i<=num;i++){
       s=s+i;

    }
    setSum(s);
  }
  return (
    <>
     <input type="number" onChange={(e)=>{
      calculateSum(e.target.value)
     }}/>
     <h2>sum is :{sum}</h2>
     <button onClick={increment}>counter{count}</button>
    </>
  )
}

export default App
