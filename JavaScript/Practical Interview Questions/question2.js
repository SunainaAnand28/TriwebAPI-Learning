function printname(){
    console.log(`${this.firstname} ${this.lastname}`);

}

const student1 = {
    firstname: "Sunaina",
    lastname: "Anand"
};

printname.call(student1);
 printname.apply(student1);
// printname.bind(student1);
