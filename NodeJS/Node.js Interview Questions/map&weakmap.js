let user = {
    uname: "Sunaina",
    mobile: 1234,
}

let key1 = {};
let key2 = {uname:"TriwebAPI"};


let weakmapExample= {
 [key1]:"some data",
 [key2]:"new data",
}

console.log(weakmapExample);
// lenght property does not support weakmap.
// accepts only objects as keys.
// map accept primitive datatypes
