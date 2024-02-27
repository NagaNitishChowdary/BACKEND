// EXPRESS.JS
// INSTALLATION ---> npm install express --save
// TO EXECUTE ---> node index.js

const express = require('express') ; 
const PORT = 8000 ; 

const app = express() ; 

app.get('/', (req,res)=>{
    res.status(200).send('<h1>Hi This is KNNC, Welcome to Home page.</h1>') ; 
});

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>Welcome to About page</h1>') ; 
});

// HANDLING NON-MATCH REQUEST FROM THE CLIENT
// NEXT ---> MIDDLEWARE IS CALLED. 
app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found In The Server.</h1>') ; 
});

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`) ; 
})
