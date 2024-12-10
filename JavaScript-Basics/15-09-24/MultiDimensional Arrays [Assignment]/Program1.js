//Your first 2D Array Problem
function array2D(arr){
    for (let i=0; i<arr.length ; i++){
        console.log(arr[i].join(' '));
    }
}
array2Df([[1, 2], [3, 4], [5, 6]]);


//or 

function array2Df(arr){
    arr.forEach(subArray => {
        console.log(subArray.join(' '));
    })
}
array2Df([[1, 2], [3, 4], [5, 6]]);

