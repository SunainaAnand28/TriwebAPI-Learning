/*
What is callback()
what is callback hell?
how to avoid callback hell?? Async await promise
*/
// asynchronus, equivalent of a function
// helps in non blocking code
// helps in performance of single threaded nodejs application


console.log('hello');
setTimeout(()=>{
console.log('inside settimeout');
},5000);

console.log('hii');

