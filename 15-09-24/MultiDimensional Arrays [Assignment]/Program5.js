//Odd Sum in Rows
function oddSumRows(arr){
    for(let i =0; i<arr.length; i++){
        let sum =0;
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]%2!==0){
                sum+=arr[i][j];
            }
        }
        console.log(sum);
    }
}
oddSumRows([[1,2,3], [4,5,6], [7,8,9]]);