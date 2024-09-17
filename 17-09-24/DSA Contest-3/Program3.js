function traverse2dArray(matrix){
    let sum= ' ';
       for(let i=0; i<matrix[0].length; i++){
       for(let j=matrix.length; j>=0; j--){
           sum+=matrix[j][i]+' '; 
       }     
       }
    console.log(sum);  
}
traverse2dArray([[1,8,9],[2,7,10],[3,6,11],[4,5,12]]);
 