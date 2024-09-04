//Map Characters & Sum
function MapCharactersSum(N,K,str){
    let smallLetters= 'abcdefghijklmnopqrstuvwxyz';
    let obj={};
    for (let i =0; i<K; i++){
        let char = smallLetters[i];
        obj[char]= N++;
    }
    let sum =0;
    for(let key in obj){
        
        sum+=obj[key];
    }
    console.log(sum);
}
MapCharactersSum(30,3,"abc");