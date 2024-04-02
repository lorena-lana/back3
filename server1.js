const http=require('http')

const server=http.createServer((req,res)=>{
    console.log("efetuando o pedido")
    res.setHeader('content-type','text/html')
    res.write("<h1>pedido o pedido 1</h1>");
    res.write("<h2>pedido o pedido 2</h2>");
    res.end()
})

server.listen(3000,'localhost',()=>{
    console.log("servidor iniciando");
 
})