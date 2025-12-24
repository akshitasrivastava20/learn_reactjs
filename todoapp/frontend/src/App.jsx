

import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  

  return (
    <>
     <CreateTodo/> 
     <Todos todos={[{
      title:"hi there",
      description:"this is my first todo"
     }]}/>
    </>
  )
}

export default App
