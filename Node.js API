const http = require('http') ; 
const PORT = 8000 ; 

const server = http.createServer((req,res) => {
    if(req.url == '/' || req.url == '/home'){
        res.statusCode = 200 ; 
        res.setHeader('Content-Type', 'text/html') ;
        res.write('<h1>This is Home Page.</h1>') ; 
        res.end() ; 
    } else if(req.url == '/about'){
        res.statusCode = 200 ; 
        res.setHeader('Content-Type', 'text/html') ;
        res.write('<h1>This is About Page.</h1>') ; 
        res.end() ; 
    } else {
        res.statusCode = 404 ;
        res.setHeader('Content-Type', 'text/html') ;
        res.write('<h1>404 Page Not Found.</h1>') ; 
        res.end() ;
    }
})

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`) ; 
}) ; 
