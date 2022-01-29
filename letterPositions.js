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

const letterPositions = function(sentence) {
    const results = {};

    //for every letter in the sentence
    for(let i = 0; i < sentence.length; i++)
    {

        if(sentence[i] !== ' ')
        {
             //if the letter exist as a current key
             if(results.hasOwnProperty(sentence[i]))
             {
                 //concatenate the current index with the next index found
                 results[sentence[i]] = results[sentence[i]].concat(i); //concat merge 2 arrays
             }
             else
             {
                 //create a new key and set it to the current index
                 results[sentence[i]] = [i]; //dont forget to use [] around i to make it an array
             }
        }
           
    }
    return results; 
    //return all the indexes in the sentence where each character is found 
};

console.log(letterPositions('LHL L'));
console.log(letterPositions('lighthouse in the house'));


const word = letterPositions('LHL L');
assertArraysEqual(word['L'], [0,2,4]);

// const letterPositions = function(sentence) {
//     const results = {};
//     for (let i = 0; i < sentence.length; i++) {
//         const letter = sentence[i];
//         if (results[letter] === undefined) {
//             results[letter] = [];
//         }
//         results[letter].push(i);
//     }
//     //console.log(results);
//     return results;
//   };


// const result = letterPositions("lighthouse in the house");
// const arr = result["h"]
// //assertArraysEqual(arr, [3, 5, 15, 18]);
// console.log(letterPositions("lighthouse in the house"))