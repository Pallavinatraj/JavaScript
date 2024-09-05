//Problem 1 : Given a string count the number of words in that strings
function strngCount(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
         count++;
    }
    console.log(count);
}
strngCount('Pallavi');



//Problem 2 : Given a string in lower case convert it to upper case
function strngUpper(str){
   console.log(str.toUpperCase())
}
strngUpper('pallavi');



//Problem 3 : Given an array of string count the overall total number of characters
function strngCountChar(str){
    let count = 0;
    let strngg = str.split(' ');
    for(let i=0; i<strngg.length; i++){
         count++;
    }
    console.log(count);
}
strngCountChar(['Pallavi']);


