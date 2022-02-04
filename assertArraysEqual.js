const eqArrays = require("./eqArrays");
const middle = require("./middle");
//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
    if(arr1.length === arr2.length)
    {
        for (let i = 0; i < arr1.length; i++) {
            const element1 = arr1[i];
            const element2 = arr2[i];
            if (element1 !== element2) {
                console.log("Assertion Failed: " + arr1 + " !== " + arr2);
                return false;
            }
        }
    }
    else
    {
        console.log("Assertion Failed: " + arr1 + " !== " + arr2);
        return false;
    }
        
    console.log("Assertion Passed: " + arr1 + " === " + arr1);
    return true;
};


//console.log(assertArraysEqual(eqArrays(middle([1,2,3,4,5,6]), [3,4]), true), [3,4]);
module.exports = assertArraysEqual;