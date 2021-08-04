const express=require("express");
const app=express();
const path=require("path");
const request=require("request");
const bodyParser=require("body-parser");
const { RSA_NO_PADDING } = require("constants");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var tasks=[];
app.use(express.static("public"));
var workLists=[];
const date=require(__dirname+"/date.js")
const day=date.getdatee();


app.get("/",function(req,res){
    res.render("list",{listTitle:day,tasks:tasks});
});
app.get("/work",function(req,res)
    {
        res.render("list",{listTitle:"WorkList",tasks:workLists});
        
    });

app.post("/",function(req,res)
    {   var item=req.body.task;
        if(req.body.button=="WorkList")
    {
        
        workLists.push(item);
        res.redirect("/work");
    } 
    else{
        tasks.push(item);
        res.redirect("/");
    }
    });
        




app.listen(3000,function(req,res)
{
    console.log("ok");
})



