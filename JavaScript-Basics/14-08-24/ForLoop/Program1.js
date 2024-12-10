 //Print Masai School II
function printMasaiSchool(num) {
    for(let i=0; i<num; i++){
        console.log('Masai School');
    }
  
}
printMasaiSchool(5);

//Loop 1 to N
function loop1toN(num) {
    for(let i=0; i<num; i++){
        console.log(num);
    }
    
}
loop1toN(5);


//From A to B
function fromAtoB(max,min){
    for(let i=min; i<max; i++){
        console.log(i);
    }   
}
fromAtoB(19,13);


//Multiplication Table of N
function multiplicationTableN(num) {
    for(let i=1; i<=10; i++){
        console.log(i*num);
    }   
}
multiplicationTableN(2);


//Move 2 Ahead
function moveTwoAhead(num) {
    for(let i=1; i<=num; i++);
    if(i%2!==0){
        console.log(i);
    }   
}
moveTwoAhead(13);


//Even Sum Below N
function evenSumBelowN(num) {
    let sum=0;
    for (let i=0; i<num; i++){
        if(i%2==0){
            sum+=i;
        }
        console.log(sum);
    }  
}


//Mod of 10 II
function modeof10(num) {
    for(let i=0; i<num; i++){
        console.log(i%10);
    }
}
modeof10(7);
