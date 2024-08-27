//
function sumOfSeries(N, X) {
    let sum =1;
    for (let i=1; i<=N;i++){
        sum+=Math.pow(X,i);
    }
    console.log(sum);
 }
 sumOfSeries(3,2);