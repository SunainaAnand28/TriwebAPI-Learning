// change the "this" for some object 
 // but call it later
 /*
 > the simplest use of bind is to make a function that, no matter how it is called, is called with a particular 'this'
 > in call(), and apply() we bind "this" and execute function at a time, while in bind() we bind "this" now and executes it later
 */

 let student = {
    sname: "Sunaina",
    mobile: 1234,
     getname : function(){
        console.log(this.sname);

     }
 }

 let sn = student.getname.bind(student);

 setTimeout(sn,1000);
