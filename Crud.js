const express = require('express');
const app=express();
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))  // yh post method ke liye
app.listen(3000,()=>{
    console.log("server....");
})

let comments = [
    {
        id:0,
        username:"Son",
        comment:"chitkara is a nice university 0"
    },
    {
        id:1,
        username:"Dad",
        comment:"chitkara is a nice university 1"
    },
    {
        id:2,
        username:"Mother",
        comment:"chitkara is a nice university 2"
    }
    , {
        id:3,
        username:"Daughter",
        comment:"chitkara is a nice university 2"
    }
  ]
app.get('/blog',(req,res)=>{
    res.render('crud',{comments})
})

app.get('/blog/new',(req,res)=>{
    res.render('new')
})
app.post('/comment',(req,res)=>{
   let {username,comment} =req.body;
console.log(req.body);
    comments.push({username,comment,id:comments.length})
    // res.render('crud',{comments})
    res.redirect('/blog') // its use for redirect rhe main file

})
