//Even Sum in Columns
function evenSumColumns(arr){
    for(let i=0; i<arr[0].length; i++){
        let sum = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[j][i]%2===0){
                sum+=arr[j][i];
            }   
    }
    console.log(sum);
  }
}
evenSumColumns([[1,2,3],[1,5,6],[1,8,9]]);