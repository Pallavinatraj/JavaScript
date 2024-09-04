//Given an Array find the unique items in the array
function findUnique(arr){
    return[...new Set(arr)];
}
let undef = findUnique([1,2,3,3,4,4,5,6,7,7]);
console.log(undef);
