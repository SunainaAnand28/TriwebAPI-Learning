//syntax
// () => {}
// if we have single variable, then we don't need to use parenthesis.
// uname => {}
// uname => "hi" +uname;


const addtwonumber = (num1,num2) => {
    return num1+ num2;

 }

const addHiToName = uname => {
    return 'Hi '+ uname;

}

//Syntax 1

// const AddHellotoname = uname => {
//     return "hello "+ uname;
// }

// syntax 2

const AddHellotoname  = uname => "Hello "+ uname;

const result = addtwonumber(1,2);
console.log(result);

const r2 = addHiToName("Sunaina");
console.log(r2);

console.log(AddHellotoname("Sunaina Anand "));

const isThis = () => {

    console.log(this);

}
console.log(this);
isThis();

function addtwonumbers(num3,num4) {
    console.log(this);
    return num3 + num4;
    
 }

 console.log(addtwonumbers(3,4));
 console.log(this);
 addtwonumbers();
