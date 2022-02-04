//const assertEqual = require("./assertEqual");


const head = function(arry) {
    const element = (arry != undefined) ? arry[0] : undefined;
    return element;
}


module.exports = head;