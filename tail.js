const tail = function(arry) {
    const elements = (arry != undefined && arry.length > 1) ? arry.slice(1) : undefined;
    return elements;
}

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


module.exports = tail;
