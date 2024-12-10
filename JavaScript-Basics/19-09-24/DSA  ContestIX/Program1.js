//
function specificDiagonals(matrix, K){
    let diff =0;
    let add =0;
    for(let i=0; i<matrix.length; i++){
        let dia1 = ' ';
        let dia2 = ' ';
        for(let j=0; j<=matrix[i].length; j++){
            if(matrix[i][j]===K){
             diff+= i-j;
             add += i+j;
            }
           if(i-j == diff ){
              dia1+=matrix[i][j];            
            }
           if(i+j == add ){
             dia2+=matrix[i][j];            
            }
        }
        console.log(dia1);
        console.log(dia2);      
    }
}
specificDiagonals([[1,2,3],[4,5,6],[7,8,9]],6);