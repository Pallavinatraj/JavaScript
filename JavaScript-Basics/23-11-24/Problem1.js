// Two Arrays One Product

function runProgram(input) {
    let data = input.split("\n");
    let tc = +data[0];
    let line = 1;


    for (let i = 0; i < tc; i++) {
        let N = +data[line];
        line++;
        let arr1 = data[line].split(" ").map(Number);
        line++;
        let arr2 = data[line].split(" ").map(Number);
        line++;
        prob(arr1, arr2);

    }
}

function prob(arr1, arr2) {
    let m1 = 1;
    let m2 = 1;


    for (let i = 0; i < arr1.length; i++) {
        m1 *= arr1[i];
        m2 *= arr2[i];
    }

    console.log(m1 * m2);
}


let input = `1
3
1 2 3
2 3 1`;

runProgram(input);


