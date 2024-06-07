let regex = /\w/g;

let regex1 = /^\w/g;


let str = "i am taking a workshop, i am here.";

let res = str.search(regex);
console.log(res);
console.log(str[res]);

let res1 = str.search(regex1);
console.log(res1);
console.log(str[res1]);