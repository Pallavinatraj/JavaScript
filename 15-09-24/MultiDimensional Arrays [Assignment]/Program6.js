function vowelsInRows(arr) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < arr.length; i++) {
        let hasVowel = arr[i].split('').some(char => vowels.includes(char));
        if (hasVowel) {
            console.log("yes");
        } 
        else {
            console.log("no");
        }
    }
}
vowelsInRows([['a','b'],['c','d'],['e','f']]);


