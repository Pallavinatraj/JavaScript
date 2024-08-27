//Minimum in array
function minimumInArray(arr){
    console.log(Math.min(...arr));
}
 
//or

function minimumInArray1(N,arr){
    let min = arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
         
    }
    console.log(min);
       
}
minimumInArray([1,2,3,4,5]);
console.log("*******");
minimumInArray1(5,[1,2,3,4,5]);


