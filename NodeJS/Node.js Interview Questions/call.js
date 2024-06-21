// function product(){

//     console.log(this);
// }

// console.log(this);
// product();

function product(productname,price){
 this.productname = productname;
 this.price = price;

}

function student(sname,productname,price){
    // this.productname = productname;
    // this.price = price;
    product.call(this,productname,price);
    this.sname = sname;


}
const student1 = new student("Sunaina","purchased laptop", 2000);
console.log(student1);
console.log(student1.sname);
console.log(student1.productname);
console.log(student1.price);






const r1 = new product("laptop",10000);
const r2 = new product("mouse",100);

// console.log(product);
// //console.log(r1.productname);  //laptop
// console.log(r1);
// console.log(r2);
//console.log(r2.productname);  //mouse