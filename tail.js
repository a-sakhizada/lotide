const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};




const tail = function(arry) {
    const elements = (arry != undefined && arry.length > 1) ? arry.slice(1) : undefined;
    return elements;
}

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!



// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(["yo yo"]));
assertEqual(tail([]));
assertEqual(tail());