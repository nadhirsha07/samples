var express= require("express");
var app = new express();

app.get('/', function(req,res){
    res.send("HELLO WORLD"
    );
});
 const port =process.env.port||3000
 app.listen(port, function(){
     console.log("listen 3000");
 });