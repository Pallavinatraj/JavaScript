//Problem 1: Create a function to check if a number is Prime or Not
function primeNumber(num){
    let count =0;
    for (let i=2; i<num; i++){
        if(num%i===0){
            count++;
        }
        }
        if(count===0){
            console.log('Its a Prime Number');
        }
        else{
            console.log('Its not a Prime Number');
        }  
    }
primeNumber(3);
