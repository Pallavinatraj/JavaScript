//Even Collection
function evenCollection(max,min){
    let sum =0;
    for (let i=min; i<=max; i++){
        if(i%2===0){
            sum+=i;
        }
    }
    console.log(sum);    
}
evenCollection(19,13);