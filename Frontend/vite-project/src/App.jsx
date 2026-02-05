import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
// import noteModel from '../../../Backend/src/models/notes.models';

function App() {
  const [notes , setNote] = useState([])

  axios
  .get("http://localhost:3000/notes")
  .then((res)=>{
    setNote(res.data.notes);
  })
  return (
    <>
      {/* <div className="container">
        <h1>Title</h1>
        <p>Description</p>
      </div> */}

   {
    notes.map((note,index)=>{
      return (
      <div className="container">
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
      )
    })
   }
    </>
  )
}

export default App

