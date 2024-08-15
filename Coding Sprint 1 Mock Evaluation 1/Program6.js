//Print Grade
function printGrade(total) {
    if(total==100){
        console.log('A');
    }
    else if(total>=90){
        console.log('B');
    }
    else if(total>=80){
        console.log('C');
    }
    else{
        console.log('F');
    }
}
printGrade(89);