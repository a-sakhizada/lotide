//our own map function will take 2 args: an array to map and a callback function 
//and return a new array based on the result of the callback function 

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


function eqArrays(arr1, arr2)
{

    return arr1.every((element, index) => {
        if (element === arr2[index]) {
          return true;
        }
    
        return false;
    });
}





//map function 
const map = function(array, callback) {
const results = [];

for(let item of array) {
    results.push(callback(item));
}
return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
eqArrays(results1, ['g', 'c', 't', 'm', 't']);