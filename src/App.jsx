import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/todos'
import Delete from './components/delete'

function App() {
  var texts = ["a", "b", "c"]
  console.log(texts);

  return (
    <>
      <h1>To Do List</h1>
      <input id="input" type="text" />
      {texts.map((element, index) => {  
          return [
            <Todos key={index} index={index} texts={element} />,
            <Delete key={index + 1} index={index} texts={element} />
          ]
          

        })}
    </>
  )
}




export default App
