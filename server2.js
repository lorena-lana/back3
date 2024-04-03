const http= require('http')
const fs = require('fs');
let porta=3000;
let host = 'localhost';

const server=http.createServer((req,res)=>{
    //header
   res.setHeader('content-type', 'text/html')
   fs.readFile('pag1.html',(erro,data)=>{
    if(erro){
        console.log('erro');
        res.write('Deu merda aí mano!')
    }else{
        res.write(data);
        res.end();
    }
   })


})

server.listen(porta,host,()=>{
    console.log('servidor no ar');
})