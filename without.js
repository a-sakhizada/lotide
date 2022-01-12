//Implement without which will return a subset of a given array, removing unwanted elements.


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



function without(src, itemsToRemove){
    const result = [];

    for(let i = 0; i < src.length; i++) //[1,2,3] 
    {
        const item = src[i]; //1 //2
        let add = true; 

        for(let j = 0; j < itemsToRemove.length; j++) //[1] //gets out of 2nd loop
        {
            const itemToRemove = itemsToRemove[j]; //1

            if(item === itemToRemove) //if not true then j++, if j> itemsToRemove.length then go to if(add) the i++
            {
                add = false; 
                break; //gets out of current if and outer for loop and runs code after 2nd for loop (if(add))
            }
        }
        if(add)
        {
            result.push(item);
        }
    }
    return result;
}


// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);