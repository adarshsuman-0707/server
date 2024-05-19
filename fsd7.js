const express = require('express');
let app=express();
// console.log(app);
// app.use((req,res)=>{
//     res.send("he;;;sdfsad")
// })
const port= process.env.PORT||3000;
app.listen(port,()=>{
console.log("Running");
})
// app.post('/home',(req,res)=>{
//     res.send("Route")
//     console.log(req.body['name']);
// })
// app.get('/getting',(req,res)=>{
    
//     res.send("getting");
//     console.log(req.body['name']);
// })

//dynamic 
//: lagate hi yh path parameter hai
//search become a key
// app.get('/:search',(req,res)=>{
// let {search}=req.params
// console.log(search);
// res.send(search)
// })
// app.get('/:search/:next',(req,res)=>{
//     console.log(req.params);
// let {search,next}=req.params
// console.log(next);
// res.send(next + " " +search)
// })

//querry parameter ? iske baad jo bhi ho bo sab querry parameter hoga
// app.set('view engine','ejs')
// app.get('/search',(req,res)=>{
//     console.log(req.query);
//     // res.send(req.query.fir)
//     // res.render("index")
// })
// app.get('*',(req,res)=>{
//     res.send("not found ")
// })
// app.get('/:search',(req,res)=>{
//     let {search}=req.params
//     console.log(search);
//     res.send(search)
// })

app.set('view engine','ejs')
// app.get('/search',(req,res)=>{
    
// console.log(req.query);
// // res.send(req.query.Firstname + " "+ req.query.Lastname)
// res.render('index')
// })


// final practice
app.use(express.static("public"))       
app.get('/random',(req,res)=>{
let a=Math.floor(Math.random()*100);
let b=Math.round(22.9324);
let c=23;
let arr=['A','B','C']

res.render('random',{a,b,c,arr})  
})


app.get('/search',(req,res)=>{

    res.render('index')
    })
    app.get('/random/:data',(req,res)=>{
        let b=req.params;
        console.log(b);
        let arr=['A','B','B','B','A','A','A','A']
        let se=b.data
        res.render("randoms",{arr,se})
    })
    