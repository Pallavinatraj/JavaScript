//Single Array
function singleArray(arr){
    let sum =' ';
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]+1+' ';
    }
    console.log(sum);
}
singleArray([1,2,3,4,5]);