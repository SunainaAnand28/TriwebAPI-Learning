

module.exports.add = (req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1 + n2;
    res.send(`sum = ${sum}`);
 };
 
 

 module.exports.subtract =(req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let diff = n1 - n2;
    res.send(`diff = ${diff}`);
 };
 

 module.exports.product = (req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let multiply = n1 * n2;
    res.send(`multiply = ${multiply}`);
 };
 

 module.exports.division = (req,res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let div = n1 / n2;
    res.send(`division = ${div}`);
 };
 

 
 
 
   