const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome From the First Github Demo App!! ")
})
app.listen(3500,()=>{
    console.log("App is listening at port 3500!!!!")
})