var x = 10;
var y = 5;
var z = 53;

if (x > y) {
    if (x > z) {
        console.log("X is greatest.");
    } else {
        console.log("Z is greatest than all.");
    }
} else {
    console.log("Y is greater than X.");
    if (y > z) {
        console.log("Y is greatest.");
    } else {
        console.log("Z is greatest.");
    }
}
