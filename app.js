var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(bodyparser());
app.use(express.json());
app.set('view engine', 'ejs');
var array = Array();
app.get("/", function(req, res){
    res.render(__dirname+"/Views/index.ejs");
});

app.post("/addList", function(req, res){
    console.log(req.body);
    array.push(req.body);
    res.redirect("/list");
});
app.get("/list", function(req, res){
    res.render('list.ejs', {users: array});
})





app.use(express.static(__dirname+"/Views"));

//app.use("/", router);

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});