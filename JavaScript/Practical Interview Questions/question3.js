function istwopassed(){
    if(Array.from(arguments).indexOf(2) >= 0){
        console.log("yes two is passed to the function.")
    }else{
        console.log("two is not passed to the function.")
    }
}

istwopassed(3);