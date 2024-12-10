//Masai School! Hurray!
function masaiSchoolHurray(N) {
    for (let i=1; i<=N; i++){
        if(i*1==5 && i*1==7){
            console.log('Masai School');
        }
        else if(i*1==7){
           console.log('Masai'); 
        }
        else if(i*1==5){
           console.log('School'); 
        }
        else{
            console.log('Hurray!');
        }
    }
}
masaiSchoolHurray(7);