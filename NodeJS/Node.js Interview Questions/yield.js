// the yield keyword is used to resume and pause the generator functions.

function* getnum(index){
    while(index < 5){
        yield index;
        index++;
    }
}
let it = getnum(0);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());