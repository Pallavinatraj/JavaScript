//Problem 1 : Given a string count the number of words in that string
let word = 'Pallavi';
let count = 0;
for (let i =0; i<word.length ; i++){
    count++;
}
console.log(count);



//Problem 2 : Given a string in lower case convert it to upper case
let word1 = 'pallavi';
console.log(word1.toLocaleUpperCase());



//Problem 3 : Given an array of string count the overall total number of characters
let wordArry = ['My','Mentor','is','Sagarwankhade'];
let count2 =0;
for(let str of wordArry){
    count2+=str.length;
}
console.log(count2);