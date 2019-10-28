var express= require('express');
var app= express();
var register=require('./register');



app.use('/register',register);




var port = process.env.port||4000;


app.listen(port,function(){
    console.log("http://localhost:"+port);
})