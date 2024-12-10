//Print Array
function printArray(N,arr){
    for (let i=0; i<N; i++){
        console.log(arr[i]);
    }
}
printArray(5,[1,2,3,4,5]);



//Print Array in Horizontal
function printArray1(N,arr){
    let sum= ' ';
    for (let i=0; i<N; i++){
        sum+=arr[i]+' ';   
    }
    console.log(sum);
}
printArray1(5,[1,2,3,4,5]);



//Reverse Array Traversal
function reverseArrayTraversal(n, arr){
    console.log(arr.reverse().join(' '));
}
reverseArrayTraversal(5, [1,2,3,4,7]);



//Even Array
function evenArray(n, arr){
    for(let i=0; i<n; i++){
        if(arr[i]%2===0){
            console.log(arr[i]);
        }
    }
}
evenArray(5,[1,2,3,4,5]);



//Even Array Sum
function evenArraySum(n, arr){
    let sum = 0;
    for (let i=0; i<n; i++){
        if(arr[i]%2===0){
            sum+=arr[i];
        }
    }
 console.log(sum);    
}
evenArraySum(5,[1,2,3,4,5]);



//Minimum in array
function minimumInArray(N,arr){
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
}
minimumInArray(5, [1,2,3,4,5]);



