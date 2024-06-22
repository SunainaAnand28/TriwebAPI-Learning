/*
How to convert a string in object and vice versa
*/

let student= {
    sname: "Sunaina",
    friend: "TriwebAPI",
    mobile: 2344
}

console.log(student.sname);

// convert object to string

let strfromobj = JSON.stringify(student);

console.log(strfromobj);
console.log(strfromobj.sname); //undefined
 

// convert string to object

let objfromstr = JSON.parse(strfromobj);

console.log(objfromstr);
console.log(objfromstr.sname);
