//Divisbly BY k
function divisibleByK(num,k) {
    for (let i=0;i<=num;i++){
        if(i%k===0){
            console.log(i);
        }
    }
}
divisibleByK(7, 2);

//Sum Of Divisibly By K
let sum= 0;
function divisibleByKI(num,k) {
    for (let i=0;i<=num;i++){
        if(i%k===0){
            sum+=i;
        }
    }
    console.log(sum);
}
divisibleByKI(7, 2);


//Masai Divisor
function divisibleByK2(left, right, k) {
    for (let i=left;i<=right;i++){
        if(i%k===0){
            console.log(i);
        }
    }
}
divisibleByK2(1, 10,3);







