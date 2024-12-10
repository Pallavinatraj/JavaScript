//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.
function arrayPosition(arr){
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
    }
}
arrayPosition(['a','b','c','d']);



//Problem 2 : Given a character in lower case print the upper case character
function wordConvert(word){
    console.log(word.toUpperCase());
}
wordConvert('a');



//Problem 3 : Given an array of numbers find the average of all the even numbers.
function arrayAvarage(arr){
    let sum =0;
    let count =0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2===0){
            sum+=arr[i];
            count++;
        }
    }
    console.log(sum/count);
}
arrayAvarage([1,2,3,4,5,6]);




