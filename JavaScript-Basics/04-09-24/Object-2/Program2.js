//Given a string print, the number of times each character appears 
function stringPrint(str){
    let obj={};
    for(let i=0; i<str.length;i++){
        let char = str[i];
        if(obj[char]==undefined){
             obj[char]=1;
        }
        else{
            obj[char]++;
        }
    }
    for(let key in obj)
    console.log(key+'-'+obj[key]);
};
stringPrint('aabcd');