const http=require('http')


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"hello"})
    res.end("<p>hello this is my server page the is running my project os chat app</p>")
})


server.listen(8000,()=>{
    console.log("server is running")
})