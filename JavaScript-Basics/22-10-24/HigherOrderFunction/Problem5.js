// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]
let sampleInput =[2, 4, 5, 3, 6, 8];
let sampleOutput= sampleInput.filter(function(el, index){
    return index%2 === 0 && el%2 ===0;
});
console.log(sampleOutput);
