const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;


describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
        const words = ["Yo Yo", "Lighthouse", "Labs"];
        assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
    })

    it("returns undefined for tail()", () => {
        assert.deepEqual(tail(), undefined);
    })

    it("returns undefined for []", () => {
        const words = [];
        assert.deepEqual(tail(words), undefined);
    })
});


// Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(["yo yo"]));
// assertEqual(tail([]));
// assertEqual(tail());