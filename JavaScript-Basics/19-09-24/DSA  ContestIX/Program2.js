//
function rotateBy90(R, matrix){
    for(let i=matrix[0].length-1;i>=0;i--){
        let rotate = ' ';
        for(j=0 ; j<matrix.length; j++){
            rotate+= matrix[j][i]+' ';
        }
        console.log(rotate);
    }
}
rotateBy90([1,2,3,4],[5,6,7,8],[1,2,3,4],[5,6,7,8]);
