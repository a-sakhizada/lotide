const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        const element2 = arr2[i];
        if (element1 !== element2) {
            //console.log("Assertion Failed: " + arr1 + " !== " + arr2);
            return false;
        }
    }
    //console.log("Assertion Passed: " + arr1 + " === " + arr1);
    return true;
};



const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) 
{
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) 
    {
        return false;
    }
    for (const key of keys1) {
        const obj1Val = object1[key];
        const obj2Val = object2[key]
        if (Array.isArray(obj1Val) && Array.isArray(obj2Val)) 
        {
            if (!eqArrays(obj1Val, obj2Val)) 
            {
                return false;
            }
        } 
        else if (obj1Val !== obj2Val) 
        {
            return false;
        }
    }
    return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);