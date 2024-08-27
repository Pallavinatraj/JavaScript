//Odd Sum Again
function oddSumAgain(num) {
    for(let i=1; i<=num;i++){
        let sum=0;
        for(let j=1; j<=i;j++){
            if(j%2!==0){
             sum+=j;   
            }
        }
        console.log(sum);
    }
}
oddSumAgain(4);