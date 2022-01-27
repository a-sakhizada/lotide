
//TEST/ASSERTION FUNCITONS
function eqArrays(arr1, arr2)
{

    return arr1.every((element, index) => {
        if (element === arr2[index]) {
          return true;
        }
    
        return false;
    });
}


const assertArraysEqual = function(actual, expected) {
    for (let i = 0; i < actual.length; i++) {
        const element1 = actual[i];
        const element2 = expected[i];
        if (element1 !== element2) {
            console.log("Assertion Failed: " + actual + " !== " + expected);
            return false;
        }
    }
    console.log("Assertion Passed: " + actual + " === " + actual);
    return true;
};

//ACTUAL FUNCTION
const middle = function(array) {

    let remainder = 0;
    let middleArr = [];

    if(array.length > 2)
    {
        //check if array is even
        if(array.length % 2 === 0)
        {
            remainder = array.length / 2;
            middleArr.push(array[remainder -1]);
            middleArr.push(array[remainder]);
        } 
        else
        {
            remainder = array.length % 2;
            middleArr.push(array[remainder]);        
        }
    }
    
    return array.length > 2 ? middleArr : [];
}



// console.log(middle([1,2,3]));
// console.log(middle([1,2,3,4,5,6]));
// console.log(middle([1]));
// console.log(middle([1,2]));

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


