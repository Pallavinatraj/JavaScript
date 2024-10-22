// Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

let sampleInput = [1, 2, 3, 4, 5, 6];
let sampleOutput = sampleInput
.filter(function(el){
    return el%3===0;
})
.reduce(function(acc ,el){
    return acc+el**3;
}, 0);
console.log(sampleOutput);