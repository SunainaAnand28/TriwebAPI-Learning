// const maximum = Math.max(1,2,3);
// console.log(maximum)

const numlist = [1,2,3,4,5,6,7];
//const maximum = Math.max.apply(null,numlist);
const maximum = Math.max(...numlist);
console.log(maximum)