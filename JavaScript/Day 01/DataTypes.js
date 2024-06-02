// Primitive Data Types

let a = null;
let b = 453;
let c = "Hello";
let d = true;
let e = BigInt("567");
let f = Symbol("this is a symbol");
let g = undefined;

console.log( a , b , c , d , e , f , g );
console.log( typeof a );
console.log( typeof b );
console.log( typeof c );
console.log( typeof d );
console.log( typeof e );
console.log( typeof f );
console.log( typeof g );

console.log("-----------------------------------------------")

// Non-Primitive Data Types

const obj = {
    "key": "value",
    "name": "sunaina",
    "semester":  4,
    "year": "second",
    "passed": true,
    "number": 503 
}

console.log(obj["key"])
console.log(obj["name"])
console.log(obj["semester"])
console.log(obj["year"])
console.log(obj["passed"])
console.log(obj["number"])