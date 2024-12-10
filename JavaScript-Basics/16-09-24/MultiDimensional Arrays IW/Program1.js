//Given a square matrix print both the diagonals
function squareMatrix(k,arr){
    let dia1 = ' ';
    let dia2 = ' ';
     for(let i=0; i<arr.length; i++){
        let diff = 0;
        let add = 0;
        for(let j=0; j<=arr[i].length; j++){
           if(arr[i][j]===k){
             diff = i-j ;
             add = i+j;
           }
           if((i-j)===diff){
              dia1+=arr[i][j]+' ';
           }
           if((i+j)===add){
             dia2+=arr[i][j]+' ';
           }  
        }
    }
    console.log(dia1);
    console.log(dia2);
}
squareMatrix(4,[[11,1,2],[2,4,8], [5,8,19]]);