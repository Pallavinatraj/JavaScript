//
function countSubstringsStartingAndEndingWithSameChar(str) {
let count = 0;
for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
  }
console.log(count);
}
countSubstringsStartingAndEndingWithSameChar('abcda');