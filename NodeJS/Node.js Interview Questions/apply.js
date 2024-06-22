/*
Diffrence between apply and call
in call() we pass arguments
in apply() we pass arrays
*/
function product(pname,price){
    this.pname = pname;
    this.price = price;

}
function user(uname,pname,price){
   
    // this.pname = pname;
    // product.call(pname,price);
    // this.price = price;


    product.call(this,pname,price);
    this.uname = uname;
    

}






function marksdetails(...marks){
    this.s1 = marks[0];
    this.s2 = marks[1];
    this.s3 = marks[2];
    this.s4 = marks[3];
    this.s5 = marks[4];

    let status = "pass";
    marks.forEach((num) => {
        if(num<33){
            status = "fail";
        }
    })
    
    this.result = status;
    }


function student(sname,...marks){
    this.sname = sname;
    // this.s1 = marks[0];
    // this.s2 = marks[1];
    // this.s3 = marks[2];
    // this.s4 = marks[3];
    // this.s5 = marks[4];

    // marksdetails.call(this,marks);

    marksdetails.apply(this,marks);
}

// const user1 = new student("Sunaina", [45,56,67,78,89]);

const user1 = new student("Sunaina", 45,56,67,78,89);

console.log(user1);
