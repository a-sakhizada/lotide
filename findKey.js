//findKey --? takes and obj and a callback
//scan the object and return the first key for which the callback returns a truthy value
//if no key is found then it should return undefined

const findKey = function(obj, callback)
{
    let keys = Object.keys(obj);
    for(const key of keys)
    {
       //console.log(obj[val].stars)
        if(callback(obj[key]))
        {
            
            return key;
        }
    }
}


const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log("Assertion Failed: " + actual + " !== " + expected);
    }
};

const result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

console.log(result); 

  assertEqual(result, "noma");
