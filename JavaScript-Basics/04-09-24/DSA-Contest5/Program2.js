//Intersection of Array
function intersectionOfArray(N, arr1, arr2){
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
           if(arr1[j]===arr2[j]){
             console.log(arr1[j]);
             break;
         }  
        }   
    }
}
intersectionOfArray(5, [4,5,6,3,8],[2,7,5,2,7]);