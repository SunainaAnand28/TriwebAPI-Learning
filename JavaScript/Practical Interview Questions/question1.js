Array.prototype.last = function(){
    return this.length === 0? -1 : this[this.length-1];

};
 const arr = [34,45,56];
 console.log(arr.last());
 