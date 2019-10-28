var express = require('express')
var router = express.Router()
var mongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
var bodyParser=require("body-parser");
var Promises = require('promises');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/newuser',urlencodedParser,async function(req,res){
var name=req.body.name;
var password=req.body.password;
var result=await create_new_user(name,password);
res.status(200).send(result);
})

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function create_new_user(name,password){
return new Promise((resolve,reject)=>{

    mongoClient.connect(url,(err,db)=>{
        if(err){
            reject(err)

        }
    var mydb = db.db("sudhanshu");
    var data={
        user_id:makeid(5),
        name:name,
        password:password,
        
    }
    mydb.collection('postData').insert(data,(err,result)=>{
    if(err){ reject(err); throw err;}
    console.log(result);
    resolve(result);
    })
});


    // mongoClient.connect(url,(err,db)=>{
    //     var mydb=db.db('sudhanshu');
        
    //     mydb.collection('postData').update({name:name},{$set:{'name': name, 'password': password}},{ upsert: true}).toArray((err,result)=>{
    //         if(err){
    //             reject(err);
    //             throw err;
    //         }else{
    //    resolve(result)
        
    //     }

        
    //     })
    // });
        
});
 }


module.exports=router;
