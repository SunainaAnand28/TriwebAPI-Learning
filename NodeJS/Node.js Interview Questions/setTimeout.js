function add(callby,n1,n2){
    console.log(callby, ":",n1+n2);

}

setImmediate(()=> {
    add("setImmidiate",2,3);


}); //callback register with CHECK QUEUE for next cycle.

setTimeout(()=>{
    add("setTimeout",3,4);
},0); //callback register with TIME QUEUE for next cycle.


add("Direct",1,2);