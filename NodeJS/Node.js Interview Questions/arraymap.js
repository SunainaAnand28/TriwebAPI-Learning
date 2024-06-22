//array map
let arr  = [1,2,3,4,5,6,7,8];
let newarr2 = [];

for( let i = 0 ;i < arr.length; i++){
    // console.log(arr[i]);
    //    newarr2[i] = arr[i]*2;
    newarr2.push( arr[i]*2);
    
}

console.log(newarr2);


//map()

//any operation on each element of array and return same size of array 
console.log('--------------------')
console.log('using map()')

let newarr3 = arr.map((element)=>
    element*2);

console.log(newarr3)


/*
the map method calls the provided function once for each element in array 
map() does not execute the function for array elements without values
*/