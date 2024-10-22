// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

let sampleInput = [2,3,4];
let sampleOutput = sampleInput.reduce(function(acc ,el){
    return acc*el;
},1);
console.log(sampleOutput);