// set immidiate is not immidiate as it's name.
// it's callback is placed in the check queue of the next cycle.
//    CHECK QUEUE occurs later than the TIMER QUEUE

let a = 1;
let b = 2;

function addtwonumber(n1,n2){
    console.log(n1+n2);

}

// console.log(addtwonumber(a,b));


setImmediate(() => {
    addtwonumber(a,b)
}); //callback Register

//can i call the ABOVE FUNCTION inside setImmidiate()?
// Callback should be a function.
// yes we can pass a function as a callback.


console.log('inside event loop1');
