// Given an array of strings print the length of each string

var fruitsList = ["apple", "windows", "ubuntu"];
var lengthOfFruits = function(el, index){
    console.log(el.length)
}
fruitsList.forEach(lengthOfFruits); 
fruitsList.map(lengthOfFruits); //for output in array

