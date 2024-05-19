const express = require('express');
let app=express();

app.set('view engine','ejs'); //iska use file [pr render krane ke liye]
app.use(express.static('public')) //iska use css ke liye hai 
app.use(express.urlencoded({extended:true}))  // yh post method ke liye
app.use(express.json())  // yh data 
let port=3000;
app.listen(port,()=>{
    console.log(`Running ${port}`);
})

// app.get('/:search',(req,res)=>{
//     // res.send("hello")
//     let a=234;
//     res.render('practice',{a})

// })

app.get('/',(req,res)=>{

    res.render("practice")
})

app.get('/user',(req,res)=>{
    console.log(req.body);
    res.send(req.body.firstname +" " +req.body.email +" " + req.body.pass )

 
    // res.send(req.query.firstname +" " +req.query.email +" " +req.query.pass )
})

app.post('/user',(req,res)=>{
    // console.log(req.query);
    console.log(req.body['firstname']);
    res.send(req.body.firstname +" " +req.body.email +" " + req.body.pass )
    console.log(req.body['email']);
})
