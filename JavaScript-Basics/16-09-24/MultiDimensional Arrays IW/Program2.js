//Given a matrix print it in the form of a snake
function snakeOfPrint(arr){
    for(let i=0; i<arr.length; i++){
        let sum =0;
        if(i%2===0){
            for(let j=arr[i].length; j>=0; j++){
                sum+=arr[i][j]+' ';
            }
        }
        else{
            for(let j=arr[i].length; j>=0; j++){
                sum+=arr[i][j]+' ';
            } 
        }
        console.log(sum);
    }
   
}
snakeOfPrint([[11,1,2],[2,4,8], [5,8,19]]);