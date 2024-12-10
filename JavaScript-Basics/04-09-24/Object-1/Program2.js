//MapCharacter  Again
function mapCharacter(N){
    let smallLetters= 'abcdefghijklmnopqrstuvwxyz';
    let obj={};
    for(let i=0; i<smallLetters.length;i++){
        let char = smallLetters[i];
        obj[char] = N++;
    }
    for(let key in obj){
        console.log(key+'-'+obj[key]);
    }
    
}
mapCharacter(30);