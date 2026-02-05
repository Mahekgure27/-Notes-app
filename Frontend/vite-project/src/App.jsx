import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
// import noteModel from '../../../Backend/src/models/notes.models';

function App() {
  const [notes , setNote] = useState([])

  function fetchNotes(){
    axios
    .get("http://localhost:3000/notes")
    .then((res)=>{
    setNote(res.data.notes);
    })
  }

  useEffect(()=>{
    fetchNotes();
  },[])
 
  function handleSubmit(e){
    e.preventDefault()

    const {title, description} = e.target.elements

    console.log(title.value, description.value);

    axios.post("http://localhost:3000/notes",{
      title:title.value,
      description:description.value
    })
    .then(res=>{
      console.log(res.data)
      
      fetchNotes();
    })
  }

  function handleDeleteNote(noteId){
    axios.delete("http://localhost:3000/notes/"+noteId)
    .then(res=>{
      console.log(res.data);

      fetchNotes();
    })
  }

  return (
    <>
      {/* <div className="container">
        <h1>Title</h1>
        <p>Description</p>
      </div> */}
   <form onSubmit={handleSubmit}>
  
  <input
    type="text"
    name="title"
    placeholder="Enter title"
  />

  <input
    type="text"
    name="description"
    placeholder="Enter description"
  />
  <button type="submit">Add</button>
</form>

    <div className="dashboard">
 {
  notes.map((note, index) => {
    return (
      <div className="container" key={index}>
        <h1>{note.title}</h1>
        <p>{note.description}</p>

        <div className="actions">
          <button className="update-btn">Update</button>
          <button className="delete-btn" onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
        </div>
      </div>
    );
  })
}
  </div>
    </>
  )
}

export default App

