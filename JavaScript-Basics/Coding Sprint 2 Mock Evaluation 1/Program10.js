//Check Palindrome
function checkPalindrome(str) {
let rvrs=str.split('').reverse().join('');
if(str===rvrs) {
    console.log('Yes');
}
else{
    console.log('No');
}
}
checkPalindrome('naman');
checkPalindrome('pallavi');

