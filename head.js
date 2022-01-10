const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};

const head = function(arry) {
    const element = (arry != undefined) ? arry[0] : undefined;
    return element;
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([4]), 4);
assertEqual(head([]), undefined);
assertEqual(head(), undefined);