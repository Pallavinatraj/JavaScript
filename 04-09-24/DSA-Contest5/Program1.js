           //Count such pairs
 function countSuchPairs(N,K,A){
    let sum =0;
    for(let i=0; i<N;i++){
        for(let j=i+1; j<N;j++){
            if(A[i]+A[j]===K){
                sum++;
            }
        }
    }
    console.log(sum);
}
countSuchPairs(5,9,[3,0,6,2,7]);
