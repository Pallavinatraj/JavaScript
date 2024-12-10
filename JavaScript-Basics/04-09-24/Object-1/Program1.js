//Map Characters
function mapCharacters(N){
    let smallLetters= 'abcdefghijklmnopqrstuvwxyz';
    let obj = {};
    for(let i =0; i<N; i++){
        let char = smallLetters[i];
        obj[char]= i+1;
    }
    for (let key in obj){
        console.log(key+'-'+obj[key]); 
    }
};