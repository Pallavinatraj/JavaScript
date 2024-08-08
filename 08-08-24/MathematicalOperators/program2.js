//https://oj.masaischool.com/contest/3547/problems


//Operation on  Numbers
function operationOnNumbers(number) {
    console.log(((number*3)+7)-10);
}
operationOnNumbers(4);
console.log('*************');

//Square it
function squareIt(N) {
    console.log(N**2);
}
squareIt(7);
console.log('*************');


//doubleTwoTripleOne
function doubleTwoTripleOne(one, two, three, four) {
    console.log((one*2)+(two*2)+(three*3)+(four+4));
}
doubleTwoTripleOne(1,2,3,4);
console.log('*************');


//Seven Number
function sevenNumber(A, B, C, D, E, F, G) {
    console.log((A+B+C)*(D+E+F+G));
}
sevenNumber(1,2,3,4,5,6,7);
console.log('*************');

//Find X again
function findX(x) {
    console.log(x*7*7); 
}
findX(6);
console.log('*************');

//Infinity Stones
function infinityStones(one, two, three, four, five, six) {
    console.log(one+(two*2)+(three*3)+(four*3)+(five*2)+(six*2));
}
infinityStones(1,2,3,4,5,6);



//Area and Perimeter
function areaAndPerimeter(L1,B1,L2,B2) {
    let areaOfRect1 = L1*B1;
    let areaOfRect2 = L2*B2;
    let periOfRect1 = 2*(areaOfRect1);
    let periOfRect2 = 2*(areaOfRect2);
    console.log(areaOfRect1>areaOfRect2);
    console.log(periOfRect1>periOfRect2);
}
areaAndPerimeter(1,2,2,3);
console.log('*************');



//cube and square
function cubeAndSquare(n,m) {
    console.log((n**3)>(m**2));
}
cubeAndSquare(2,3)
console.log('*************');
