//Odd Sum in Columns
function oddSumColumns(arr){
    for(let i=0; i<arr[0].length; i++){
        let sum =0;
        for(let j=0; j<arr.length; j++){
            if(arr[j][i]%2!==0){
                sum+=arr[j][i];
            }
        }
        console.log(sum);
    }
}
oddSumColumns([1,2,3],[4,5,6],[7,8,9]);
