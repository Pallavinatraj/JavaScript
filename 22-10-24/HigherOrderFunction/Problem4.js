// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// // Sample Output - 8
let sampleInput = ["A", "Good", "Problem"];
let sampleOutput= sampleInput
.filter(function(el){
    return el.length%2===1;
})
.reduce(function(acc, el){
    return acc+el.length;
},0);
console.log(sampleOutput);