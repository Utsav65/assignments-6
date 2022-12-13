const express = require("express")

const app = express()

app.set('view-engine','ejs')
app.get('/',(req,res)=>{
    res.send("Welcome From the First Cyclic Demo App!! ")
})

app.get('/display',(req,res)=>{
    res.render("display.ejs",{author:'Utsav Patel-156587206'})
})
app.listen(3500,()=>{
    console.log("App is listening at port 3500!!!!")
})