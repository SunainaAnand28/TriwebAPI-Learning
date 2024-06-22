function add(callfrom,n1,n2){
    console.log(callfrom, ":",n1+n2);

}

setImmediate(()=> {
    add("setImmidiate",1,2);


}); //callback register with CHECK QUEUE for next cycle.

setTimeout(()=>{
    add("setTimeout",2,3);
},0); //callback register with TIME QUEUE for next cycle.

process.nextTick(()=>{
    add("process nextTick",4,5);
})

add("Direct",1,2);

/* 
> it puts its callback at the front of the event queue.
> Execute after the code currently being executed, but before IO events, or timers
*/