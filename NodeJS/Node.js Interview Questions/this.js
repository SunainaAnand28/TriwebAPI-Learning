let myObject = {
    name: "My Object",
    product: function(){
        console.log(this);
    }
};

console.log(this);
myObject.product();


// {}
// { name: 'My Object', product: [Function: product] }