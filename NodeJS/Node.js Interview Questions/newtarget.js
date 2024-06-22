function demonewtarget(x){

    if(new.target== undefined){
        console.log('no');
    }else{
    this.x = x;
    console.log("creating an object")
}
console.log("inside the function");
}

demonewtarget(5); // function call

let x = new demonewtarget(4); // creating an object of type demonewtarget

console.log(x);