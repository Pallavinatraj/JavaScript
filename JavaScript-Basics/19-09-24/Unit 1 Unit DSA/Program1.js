//Encryption Scheme
function encryptionScheme(array){
    let sum =0;
    for(let i=0; i<array.length; i++){
        if(array[i]===1 ){
            sum+=(i+1);
        }
    }
    console.log(sum);
}
encryptionScheme([0, 1, 1, 1, 1]);
