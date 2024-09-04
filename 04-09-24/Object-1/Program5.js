//Map Symbols
function mapSymbols(N){
    let symbols = '!@#$%^&*';
    let obj={};
    for(let i=0; i<symbols.length;i++){
        let symbls = symbols[i];
        
        obj[symbls] =N;
        N+=2;
    }
    for(let key in obj){
        console.log(key+'-'+obj[key]);
    }
}
mapSymbols(20);
