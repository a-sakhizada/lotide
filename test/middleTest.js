const assert = require("chai").assert;


const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");


describe("#middle", () => {
    it("returns [2] for [1,2,3]", () => {
        assert.deepEqual(assertArraysEqual(middle([1,2,3]),[2]), true);
    })
    it("returns [3,4] for [1,2,3,4,5,6]", () => {
        assert.deepEqual(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]), true);
    })

    it("returns [] for [1,2]", () => {
        assert.deepEqual(assertArraysEqual(middle([1,2]),[]), true);
    })

    it("returns [] for [1]", () => {
        assert.deepEqual(assertArraysEqual(middle([1]),[]), true);
    })

    it("returns [] for []", () => {
        assert.deepEqual(assertArraysEqual(middle([]),[]), true);
    })

});



    // it("returns [2,3] for [1,2,3]", () => {
    //     assert.deepEqual(eqArrays(middle([1,2,3]),[2]), true);
    // })
    // it("returns [3,4] for [1,2,3,4,5,6]", () => {
    //     assert.deepEqual(eqArrays(middle([1,2,3,4,5,6]),[3,4]), true);
    // })

    // it("returns [] for [1,2]", () => {
    //     assert.deepEqual(eqArrays(middle([1,2]),[]), true);
    // })

    // it("returns [] for [1]", () => {
    //     assert.deepEqual(eqArrays(middle([1]),[]), true);
    // })

    // it("returns [] for []", () => {
    //     assert.deepEqual(eqArrays(middle([]),[]), true);
    // })



// console.log(assertArraysEqual(middle([1,2,3]),[2,3]));
// console.log(assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]));
// console.log(assertArraysEqual(middle([1,2]),[]));
// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([]),[]));

// console.log(eqArrays(middle([1,2,3]),[2,3]));
// console.log(eqArrays(middle([1,2,3,4,5,6]),[3,4]));
// console.log(eqArrays(middle([1,2]),[]));
// console.log(eqArrays(middle([1]),[]));
// console.log(eqArrays(middle([]),[]));