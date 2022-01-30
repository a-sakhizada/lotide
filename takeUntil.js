//create a function that takes in 2 params: the array to work with, and the callback(lodash calls predicate)
//returns a slice of array with elements taken from the beginning...it should keep going until
// the callback/predicate returns a truthy value

const takeUntil = function(array, callback)
{
    let newArray = [];
    for(const element of array)
    {
        if(callback(element))
        {
            break;
        }

        newArray.push(element);
    }

    return newArray;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);