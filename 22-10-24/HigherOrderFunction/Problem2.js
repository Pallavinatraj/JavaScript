//Given an array of string generate an array with their first characters
// Sample Input - ["Masai", "School"]
// Sample Output - ["M", "S"]

let sampleInput = ["Masai", "School"];
let sampleOutput = sampleInput.map(function(el){
    return el[0];
});
console.log(sampleOutput);
