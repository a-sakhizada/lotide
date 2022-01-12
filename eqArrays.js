
//Function implementation
const assertEqual = function(actual, expected) {
    if(actual === expected)
    {
        console.log(`✅Assertion Passed: ${actual} === ${expected}`); //to add emojis: winKey + ;
    }
    else
    {
        console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);

    }
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

// const eqArrays = function(arr1, arr2) {
    
//     for(let i = 0; i < arr1.length; i++)
//     {
//         const element1 = arr1[i];
//         const element2 = arr2[i];

//         if(element1 !== element2)
//         {
//             return false;
//         }
//     }

//     return true;
    
// }


//using every() returns bool --> checks if every element in array passes the test in function
function eqArrays(arr1, arr2)
{

    return arr1.every((element, index) => {
        if (element === arr2[index]) {
          return true;
        }
    
        return false;
    });
}


// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false


assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
