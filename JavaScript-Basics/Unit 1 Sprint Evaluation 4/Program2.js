//Nobita and Change 2
function nobitaChange(str) {
    let words1 = "abcdefghijklmnopqrstuvwxyz";
    let words2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = ' ';
    for(let i=0; i<str.length; i++){
        if(str[i]){
            for(let j=0; j<words1.length; j++){
                if(words1[j]===str[i]){
                    output+=words2[j];
                    break;
                }
                else if(words2[j]===str[i]){
                    output+=words2[j];
                    break;
                }
             }
        }
    
}
// using foor loop
console.log(output);
//or using inbuilt function
console.log(str.toUpperCase());
}
nobitaChange('abAbC');


