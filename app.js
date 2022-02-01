const express = require("express")
var app = express()
var port = 3000

app.get("/", function(req, res){
    res.send("<body style='background-color:grey;color:white'><h1 style='margintop:300px'><center>Welcome Page</center></h1></body>")
})

app.get("/about", function(req, res){
    res.send("<body style='background-color:grey;color:white'><h1 style='margintop:300px'><center>About us Page</center></h1></body>")
})

app.get("/blog", function(req, res){
    res.send("<body style='background-color:grey;color:white'><h1 style='margintop:300px'><center>Blog Page</center></h1></body>")
})

app.get("/career", function(req, res){
    res.send("<body style='background-color:grey;color:white'><h1 style='margintop:300px'><center>Career Page</center></h1></body>")
})

app.listen(port, function(err){
    console.log("Server started at port ", port)
})