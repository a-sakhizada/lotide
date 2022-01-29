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

const findKeyByValue = function(obj, val)
{
    //scan the whole object and return the key that matches the value
    for(genre in obj)
    {
        //if the current key -value matches the requested value
        if(obj[genre] === val)
        {
            return genre; //return that KEY
        }
    }

    //if no key with that value is given then return undefined 
   //return undefined;
}


const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  
  //keys are case sensitive 
  console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  console.log(findKeyByValue(bestTVShowsByGenre, "That 70s Show"));

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);