//Print Characters of a String
function printChar(N,str) {
    for(let i=0; i<N; i++){
        console.log(str[i]);
    }
}
printChar(13,'Sagarwankhade');


//Print Characters of a String in Reverse
function printCharRvrse(N,str) {
    for(let i=N; i>=0; i--){
        console.log(str[i]);
    }
}
printCharRvrse(13,'Sagarwankhade');



//Characters At Odd Position
function printCharOdd(N,str) {
    for(let i=0; i<N; i++){
        if(i%2!==0){
            console.log(str[i]);
        }   
    }
}
printCharOdd(13,'Sagarwankhade');



//Character At Even Position
function printCharOdd(N,str) {
    for(let i=0; i<N; i++){
        if(i%2===0){
            console.log(str[i]);
        }   
    }
}
printCharOdd(13,'Sagarwankhade');



//Check Vowel
function checkVowel(str) {
     console.log(str.includes('a'||'e'||'i'||'o'||'u'));
}
checkVowel('Sagarwankhade');



//Vowel & Consonant Count
function vowelAndConsonantCount(N, str) {
    let count=0;
    let constant =0;
    for(let i=0; i<N;i++){
        if(str.includes('a'||'e'||'i'||'o'||'u')){
            count++;
        }
        else{
            constant++;
        }
    }  
}
vowelAndConsonantCount(13, 'Sagarwankhade');



//Check Palindrome
function checkPalindrome(str) {
    let rvrs = str.split(' ').reverse().join(' ');
    if(str===rvrs){
        console.log('Yes');
    }
    else{
        console.log('No');
    }  
}
checkPalindrome('Pallavi');



