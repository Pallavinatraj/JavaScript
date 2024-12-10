//Problem 1: Create a function to check if a number is Prime or Not
function checkPrimeNum(num){
    let count =0;
    for (let i =2; i<num; i++){
        if(num%i===0){
            count++;
        }
    }
    if(count===0){
        console.log('This number is  a Prime Number');
    }
    else{ 
        console.log('This number is  not a Prime Number');
    }

}
checkPrimeNum(97);