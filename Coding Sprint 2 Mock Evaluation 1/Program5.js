//Even Sum Again for subarray
function evenSumAgain(num) {
    let sum =0;
    for (let i =1; i<=num; i++){
        for(let j=1; j<=i; j++){
            if(j%2===0){
                sum+=j;
            }
        }
      console.log(sum) ; 
    }
}
evenSumAgain(2);
































