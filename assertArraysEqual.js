//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];
        if (element1 !== element2) {
            console.log("Assertion Failed: " + arr1 + " !== " + arr2);
            return false;
        }
    }
    console.log("Assertion Passed: " + arr1 + " === " + arr1);
    return true;
};

module.exports = assertArraysEqual;