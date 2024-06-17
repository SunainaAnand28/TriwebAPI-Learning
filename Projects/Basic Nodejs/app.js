const express = require('express');
const calculatorRouter = require('./routers/calculator');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
   res.send('i am response');
});


// app.get('/add',(req,res)=>{
//    let n1 = 1;
//    let n2 = 4;
//    let sum = n1+n2

//    res.send(`sum = ${sum}`);

// })

app.use('/calculator', calculatorRouter);




app.listen(3001);

  