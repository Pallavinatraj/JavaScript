//Appear Once
function sumUniqueElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count === 1) {
            sum += arr[i];
        }
    }
    
    return sum;
}
const input = [3, 5, 3, 3, 8, 5, 6];
const output = sumUniqueElements(input);

