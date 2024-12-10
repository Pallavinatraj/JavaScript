//Traverse a 2d array - 3
function traverse2dArray(arr){ 
    let sum = ' ';
for(let j=0; j<arr.length;j++){
    for(let i=0; i<arr[j];i++){
        sum+=arr[j][i]+' ';
    }
}
console.log(sum);
}
traverse2dArray([[1,2,3],[4,5,6],[7,8,9]]);
