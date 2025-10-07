import express from 'express'
const app = express();

app.get('/',(req,res)=> {
    res.status(201).json({msg: "node project"});
})

app.listen(3000, ()=>{
    console.log("Port is running");
})