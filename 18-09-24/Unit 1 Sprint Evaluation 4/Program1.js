//Nice Array
function niceArray(array, K) {
    let count =0;
  for(let arr of array){
      if(array[arr]%2===0){
          count++;
      }
  }
  console.log(count);
  if(count>K){
      console.log('Good Array');
  }
  else{
      console.log('Bad Array');
  }
}
niceArray([1 ,2, 3, 4, 5], 2);
