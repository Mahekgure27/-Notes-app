const express = require("express")
const noteModel = require("./models/notes.models")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

// app.post("/notes",async (req,res)=>{
//     const {title,description} = req.body

//     const note = await noteModel.create({
//         title, description
//     })

//     res.status(201).json({
//         message:"note created successfully",
//         note
//     })
// })

app.post("/notes",async (req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message : "note created successfully bllllllleeeeeeeeee blllllleeeeeeeeeee",
        note
    })
})
   

app.get("/notes",async (req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })
})

app.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "Note deleted successfully"
  });
});

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"));
})


module.exports = app