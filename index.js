console.log("object");

// const joke = require('give-me-a-joke');
// // console.log(joke);

// joke.getRandomDadJoke(function(joke){
//     console.log(joke);
// });

const fs = require('fs');
// fs.writeFileSync('index.html', 'Hello World');
// fs.renameSync("index.html",'index.htm')
fs.writeFileSync('read.txt','purana data')
fs.appendFileSync('read.txt', ' naya data')
// fs.unlinkSync('read.txt') // isse file  hide hojayegi
let data=fs.readFileSync('read.txt')
console.log(data.toString());
fs.writeFile('read.txt','hello',(err)=>{
    // console.log('file updatedddd');
    // console.log(err);
})
fs.renameSync('read.txt','fsd7.js')


// write
// read


// const {Server} =require('http')
// Server
// let http=require('http')
// let server = http.createServer((req,res)=>{
    
//     res.end('hello this is the server finally work with the help of http')
// })
// server.listen(5000,()=>{
//     console.log('server running on port no 5000');
// })


