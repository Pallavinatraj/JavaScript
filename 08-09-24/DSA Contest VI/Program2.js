//Identify Prime
function identifyPrime(num) {
    let count =0;
    for(let i=2; i<=Math.sqrt(num) ; i++){
        if(num%i===0 && num%1===0){
            count++;
        }
    }
    if(count ===0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
identifyPrime(10);
