//Average-of-all
function averageOfAll(n, arr){
    let sum =0;
    for (let i=0; i<n; i++){
        sum+=arr[i];
    }
    console.log(Math.ceil(sum/n));
}
averageOfAll(4,[2,5,16,9]);