//Sum of Indexes
function sumOfIndexes(arr){
    for(let i=0; i<arr.length; i++){
    let sum =0;
    for (let j=0; j<arr[i].length; j++){
       if(j>0){
           sum+=' ';
       }
       sum+=(i+j);
  }
  console.log(sum);
    }
}
sumOfIndexes([[1, 2], [3, 4], [5, 6]]);