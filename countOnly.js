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


//allItems: an array of strings that we need ot look through
//itemsToCount: an object specifying what to count 

//LONGER WAY
const countOnly = function(allItems, itemsToCount){
    
    let totalCount = {}; //create empty obj
    let count = 0;

  //iterate through the object keys
  for(var keys in itemsToCount)
    {
      count = 0; //set it back to 0 when we start with a new key

     //check if property is a direct property of this object and is TRUE
        if(itemsToCount.hasOwnProperty(keys) && itemsToCount[keys])
        {
                //iterate through the array 
                for(let i = 0; i < allItems.length; i++)
                {
                    //check if the array[i] is one of the keys in the object
                    //if(allItems[i] === keys)
                    if(allItems[i] === keys)
                    {
                        count++; //add one to the count 
                        
                        totalCount[keys] = count; //add that new key and value to the newly created object 
                    }
                }
                //continue; //terminates execution of the statement in the current iteration of the current/labeled loop and continues the outer loop.
        }  
    }
    return totalCount;
}


// //SHORTER WAY
// const countOnly = function(allItems, itemsToCount) {
//     const results = {}; // create an empty object 
//     for (const item of allItems) {   //for every element in array
//         if (itemsToCount[item]) {  //if the element exists as a key in the object AND is true
//             if (results[item]) { //if result object has a key that matches that element
//               results[item] += 1; //then increment the count for that existing key
//             } else {
//               results[item] = 1; //otherwise create a key and add the new count to it
//             }
//         }
//     }
//     return results;
//   }

const items = ['a', 'a', 'b', 'c', 'd', 'e', 'a'];
const itemCount = {
    a: true,
    d: true,
    b: false,
    f: true
}


// console.log(assertEqual(countOnly(items, itemCount), {a: 3, d: 1}));
console.log(countOnly(items, itemCount));

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const itemCount2 = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
//   assertEqual(result1["Jason"], 1);
//   assertEqual(result1["Karima"], undefined);
//   assertEqual(result1["Fang"], 2);
//   assertEqual(result1["Agouhanna"], undefined);

console.log(result1);