//Battle of Odd & Even
function battleOfOddAndEven(n, arr){
    let sumOfOdd=0;
    let sumOfEven=0;
    for(let i=0; i<n; i++){
        if(arr[i]%2===0){
           sumOfOdd+=arr[i] ;
        }
        else{
            sumOfEven+=arr[i];
        }    
    }
    if(sumOfOdd>sumOfEven){
        console.log('Odd');
    }
    else{
        console.log('Even');
    }
}
battleOfOddAndEven(4, [1,2,3,4]);