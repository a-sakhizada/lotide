//console.assert 
// FUNCTION IMPLEMENTATION
// const sum = function(a, b) { 
//     return a + b;
//   }
  
  // TEST CODE
//   console.assert(sum(1, 2) === 3);
//   console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!



//our own assert function - can manipulate the color and symbol
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




module.exports = assertEqual;