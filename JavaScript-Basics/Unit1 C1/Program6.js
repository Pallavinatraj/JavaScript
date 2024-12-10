//Sum of Nums Till N
function sumTillN(N){
    let sum=0;
	for (let i=0; i<=N; i++){
	    sum+=i*5;
	}
	console.log(sum);
}
sumTillN(4);