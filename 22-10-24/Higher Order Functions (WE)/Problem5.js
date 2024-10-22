// Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4

let sampleInput = [1,2,3,4];
let sampleOutput = sampleInput
.filter(function(el){
    return el%2!==0;
})
.reduce(function(acc ,el){
    return acc+el;
});
console.log(sampleOutput);