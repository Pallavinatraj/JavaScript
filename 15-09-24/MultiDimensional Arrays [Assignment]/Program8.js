//Even Sum in Columns
function oddSumColumns(arr){
    for (let col =0; col<arr[0].length;col++){
        let sum =0;
        for (let row =0; row<arr.length; row++){
            if(arr[row][col]%2!==0){
                sum+=arr[row][col];
           }
       }
console.log(sum);
    }
}
oddSumColumns([[1,2,3],[4,5,6],[7,8,9]]);
