//Smallest and Largest of all in an  array
function smallestAndLargestOfAll(arr){
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
}
smallestAndLargestOfAll([-2,0,8,4]);
console.log('***********************');

//or 
function smallestAndLargestOfAll1(n, arr){
    let arrMin= arr[0];
    let arrMax= arr[0];
    for (let i=0; i<n; i++){
        if (arr[i]<arrMin){
            arrMin = arr[i];
        }
        if (arr[i]>arrMax){
            arrMax = arr[i];
        }
    }
    console.log(arrMin);
    console.log(arrMax);
}
smallestAndLargestOfAll1(5,[-2,0,8,4] );

