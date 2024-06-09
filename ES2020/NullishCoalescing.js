function printsomething(value){
    printthis = value ?? "not found" ;
    console.log("print this is", printthis);

}


let var1= undefined
let var2 = null;
printsomething(var1);