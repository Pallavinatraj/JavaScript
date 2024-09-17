//
function mapSymbolsSum(str) {
    let mapping ={
        '!':1 ,
        '@':2 ,
        '#':3 ,
        '$':4,
        '%':5,
        '^':6,
        '&':7,
        '*':8
    };
    let sum = 0;
    for(let char of str){
        sum+=mapping[char];
        
    }
    console.log(sum);
    
}
mapSymbolsSum('!@#$');