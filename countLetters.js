const assertEqual = function(actual, expected) {
    if(actual === expected)
    {
        console.log(`✅Assertion Passed: ${actual} === ${expected}`); //to add emojis: winKey + ;
    }
    else
    {
        console.log(`🚩Assertion Failed: ${actual} !== ${expected}`);

    }
}


const countLetters = function(sentence)
{
    //empty object
    const totalCount = {};

    //for every letter in the sentence
    for(let i = 0; i < sentence.length; i++)
    {

        //checks if the new object already has a key that matches the current letter
        //no need to check if i===0 for the first time cuz if the ew obj is empty first time anyway
        if(totalCount.hasOwnProperty(sentence[i])) 
        {
           //if yes then add 1
            totalCount[sentence[i]] += 1;
        }
        else
        {
            //otherwise create that key and count 1
            totalCount[sentence[i]] = 1;
        }

    }
    console.log(totalCount);
    return totalCount;
}


// ANOTHER WAY
// const countLetters = function(sentence) {
//     const result = {};
//     for (const letter of sentence) {
//         if (result[letter]) {
//             result[letter] += 1;
//         } else {
//             result[letter] = 1;
//         }
//     }
//     console.log(result);
//     return result;
// }

// console.log(countLetters('LHL'));
// console.log(countLetters("lighthouse in the house"));

const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);