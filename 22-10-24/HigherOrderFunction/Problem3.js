//Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]
let sampleInput = ["assignment", "problem", "media", "upload"];
let value = function(el){
   return el[0]==='a' || el[el.length-1]==='a';
}
let sampleOutput=sampleInput.filter(value);
console.log(sampleOutput);



