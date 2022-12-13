/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Utsav Patel Student ID: 156587206 Date: 11/12/2022
* 
*  Online (Cyclic) URL: https://stormy-lingerie-tick.cyclic.app/ , https://stormy-lingerie-tick.cyclic.app/display
* 
********************************************************************************/  


const express = require("express")

const app = express()

const port = process.env.port || 3500
app.set('view-engine','ejs')
app.get('/',(req,res)=>{
    res.send("Welcome From the First Cyclic Demo App!! ")
})

app.get('/display',(req,res)=>{
    res.render("display.ejs",{author:'Utsav Patel-156587206'})
})
app.listen(port,()=>{
    console.log("App is listening at port 3500!!!!")
})