import { useState } from "react"

export function HeaderwithButton(){
    const [title,setTitle]=useState("akshita");
    function changetitle(){
        setTitle(Math.random());
    }
    return <div>
        <button onClick={changetitle}>tap to change title </button>
        <h1>{title}</h1>
    </div>
}