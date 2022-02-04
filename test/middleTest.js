const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");



console.log(assertArraysEqual(middle([1,2,3]),[2,3]));
console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
console.log(assertArraysEqual(middle([1,2]),[]));
console.log(assertArraysEqual(middle([1]),[]));
console.log(assertArraysEqual(middle([]),[]));

console.log(eqArrays(middle([1,2,3]),[2,3]));
console.log(eqArrays(middle([1,2,3,4,5,6]),[3,4]));
console.log(eqArrays(middle([1,2]),[]));
console.log(eqArrays(middle([1]),[]));
console.log(eqArrays(middle([]),[]));