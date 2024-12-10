//String value!
function stringValue(S) {
    let strings = "abcdefghijklmnopqrstuvwxyz";
    let obj={};
    for(let i=0; i<=strings.length-1; i++){
        obj[strings[i]]= i+1;
    }
    let sum =0;
    for(let i=0; i<S.length; i++){
        let char = S[i];
        if(obj[char]!==undefined){
            sum+=obj[char]

        }

    }
console.log(sum);
}
stringValue("aba");