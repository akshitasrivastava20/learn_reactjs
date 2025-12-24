import { useState } from "react";
import axios from 'axios';
export function CreateTodo(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    return <div>
        <input style={{
            margin:10,
            padding:10
        }} type="text"id="title" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}/> <br/>
        
        
        
        <input style={{
            margin:10,
            padding:10
        }} type="text"id="description" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }} /> <br/>
         <button onClick={()=>{
            axios.get("http://localhost:3000/todo").then(async function(res){
                const jsonres = await res.json()
                console.log(jsonres)
                alert("todo added")

            })
         }}>Add todo</button>

    </div>
}