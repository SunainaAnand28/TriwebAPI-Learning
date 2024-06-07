let obj = {
    age: 30,
    get getage(){
        return this.age;

    },
    set setage(newage){
   this.age= newage
    }
}

console.log(obj.getage);
obj.setage = 40;
console.log(obj.getage);