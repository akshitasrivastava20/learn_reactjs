import React from "react";
import { useState } from "react"
function App() {
  const [title,setTitle]=useState("hey")
  function changetitle(){
    setTitle(Math.random());

  }
  return (
    <>
    <button onClick={changetitle}>
      click to change title
    </button>
     <Header title={title}/>
    <Header title="bye"/>
    <Header title="bye"/>
    <Header title="bye"/>
    <Header title="bye"/>
    </>
  )
}
const Header=React.memo(function Header({title}){
  return <div>
    <h1>{title}</h1>
  </div>
})
export default App
