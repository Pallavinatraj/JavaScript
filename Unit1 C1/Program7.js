//Factorial of a number
function factorialOfNumber(num){
    let total = 1;
      for (let i=num; i>=1; i--){
         total=total*i;
      }
      console.log(total);
}
factorialOfNumber(5);