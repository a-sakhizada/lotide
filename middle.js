//ACTUAL FUNCTION
const middle = function(array) {

    let remainder = 0;
    let middleArr = [];

    if(array.length > 2)
    {
        //check if array is even
        if(array.length % 2 === 0)
        {
            remainder = array.length / 2;
            middleArr.push(array[remainder -1]);
            middleArr.push(array[remainder]);
        } 
        else
        {
            remainder = array.length % 2;
            middleArr.push(array[remainder]);        
        }
    }
    
    return array.length > 2 ? middleArr : [];
}



//console.log(middle([1,2,3]));
//console.log(middle([1,2,3,4,5,6]));
// console.log(middle([1]));
// console.log(middle([1,2]));

module.exports = middle;
