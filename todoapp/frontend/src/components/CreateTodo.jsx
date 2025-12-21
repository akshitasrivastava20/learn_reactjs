import { useState } from "react";

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
            fetch('http://localhost:3000/todo',{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(async function(res){
                const jsonres = await res.json()
                console.log(jsonres)
                alert("todo added")

            })
         }}>Add todo</button>

    </div>
}