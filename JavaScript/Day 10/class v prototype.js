function employee(mobile){
    this.department = "none";
    this.mobile = mobile

}

function manager(name){
    employee.call(this)
    this.name = name;

}

manager.prototype = Object.create(employee.prototype)
manager.prototype.constructor = manager


 let akarsh = new manager('Akarsh');

console.log(akarsh);
console.log(akarsh.__proto__);


