//Sum of Rows
function sumOfRows(arr){
    for (let i=0; i<arr.length; i++){
    let sum = 0;
    for (let j=0; j<arr[i].length; j++){
        sum+=arr[i][j]; 
  }
  console.log(sum);
 }
}

//or
function sumOfRows1(arr){
    for(let i=0; i<arr.length; i++) {
        let sum = arr[i].reduce((acc, num) => acc + num, 0);
        console.log(sum);
    }
   
  }
  sumOfRows1([[1, 2], [3, 4], [5, 6]]);
  sumOfRows([[1, 2], [3, 4], [5, 6]]);
