
function addtwonum(){
    let sum = 0;
    for(let index = 0; index <arguments.length; index++){
     const element = arguments[index];
     sum = sum + element;

    }
    
    console.log(sum )
}


addtwonum(23,24);
addtwonum(23,24,35,36);
