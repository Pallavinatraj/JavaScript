//Detect Palindrome
function detectPalindrome(num){
    let rvrs =num.split('').reverse().join('');
    if(num==rvrs){
       console.log('Yes'); 
    }
    else{
        console.log('No');
    }
}
detectPalindrome(1221);