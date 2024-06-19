const student = {
    "name":"Sunaina",
    "mobile": 12345,
    "Address": "India"
};

const marksofStudent = [90,82,86,91,93,100,97,98,96,95];

// object destructuring

// console.log(marksofStudent[0]);
// console.log(marksofStudent[1]);
// console.log(marksofStudent[2]);
// console.log(marksofStudent[3]);
// console.log(marksofStudent[4]);

[sub1marks,sub2marks,sub3marks,sub4marks,sub5marks] = marksofStudent;
console.log(sub1marks,sub2marks,sub3marks,sub4marks,sub5marks);


//rest operator 

[sub1marks,sub2marks,sub3marks,sub4marks,sub5marks,...othermarks] = marksofStudent;
console.log(sub1marks,sub2marks,sub3marks,sub4marks,sub5marks,othermarks);

const student1 = {
    "uname":"TriwebAPI",
    "mobile": 67890,
    "Address": "India"
};

const{uname, mobile} = student1;
console.log(uname,mobile)