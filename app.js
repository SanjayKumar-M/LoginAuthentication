const express = require("express")

const app = express()

app.get('/',(req, res)=>{res.send("<h1>Hello Web3</h1>")})

app.listen(8080,()=>{console.log("Listening to the port...")})