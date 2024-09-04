//Map Numbers
function mapNumbers(N,K){
    let obj={};
    for(let i=1; i<=N;i++){
         let num = i;
         obj[num] =K++;
    }
    for(let key in obj){
        console.log(key+'-'+obj[key]);
    }
}
mapNumbers(5,10);