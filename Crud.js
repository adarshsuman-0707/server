const express = require('express');

const methodOverride=require('method-override') // its use for override the data using in patch method 
const app=express();
app.set('view engine','ejs')
app.use(methodOverride('_method'))
app.use(express.static('public'))
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
    res.redirect('/blog') // its use for redirect rhe main file

})

//  edit ke liye 

app.get('/blog/:id',(req,res)=>{
    let {id} =req.params;
    comments.find(comment=>{
        if(comment.id==id){
            res.render('edit',{comment})
        }
    })

})
app.patch('/blog/:id',(req,res)=>{
   console.log(req.body);
    let {username,comment,id} =req.body;
let data=comments.find((data)=>data.id==id)
data.username=username
data.comment=comment
   res.redirect('/blog')
})



// app.post('/update',(req,res)=>{
//     let {username,comment,id} =req.body;
// console.log(req.body);
// comments[id]=({username,comment,id})
// res.redirect('/blog')
// })



