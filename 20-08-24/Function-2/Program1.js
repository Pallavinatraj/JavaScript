//Write a function named addNumbers which takes two numbers as input and return their sum
//Use the function to calculate the sum of given three numbers
function addNumbers (num){
    let sum =0;
    for(let i=0; i<num.length;i++){
        sum+=num[i];
    }
    console.log(sum);

}
addNumbers([1,2,3]);