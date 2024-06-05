function getfunction(num){

    function square(){
        return num*num;

    }

    let sqr = square();
    //console.log(sqr)
    return sqr;
}

let result = getfunction(5);
console.log(result)