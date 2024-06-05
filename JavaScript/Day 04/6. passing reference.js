function updatename(student){
   student.name = "hi " + student.name
    console.log(student);

}

let objS = {name: "sunaina"};

updatename(objS);
console.log("old obj is ",objS); //pass by reference
