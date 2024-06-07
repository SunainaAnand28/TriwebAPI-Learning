let obj = {'name':"sunaina",address:"india"};

// console.log(obj.prototype);
 console.log(obj.__proto__);

 let obj1 = Object.create(obj);
 obj1.name = "ajay";
 console.log("obj1.__proto__ = ",obj1.__proto__);

 let objA = Object.create(obj1);
 console.log("objA.__proto__  ",objA.__proto__);
 