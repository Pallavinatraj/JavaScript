//Reverse the value
function reverseTheValue(num) {
    let reverse= num.toString().split('').reverse().join('');
    console.log(parseInt(reverse));
 }
 reverseTheValue(261);