//
function binaryString3(str){
    for(let i=0; i<str.length; i++){
     for(let j=i; j<str.length; j++){
        let substring = str.slice(i, j + 1);
        console.log(substring);  
         }
        }
}
binaryString3('1001');