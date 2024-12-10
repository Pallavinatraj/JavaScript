// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let sampleInput = [1, 2];
let sampleOutput = sampleInput.map(function(el){
    return el+el;
});
console.log(sampleOutput);
