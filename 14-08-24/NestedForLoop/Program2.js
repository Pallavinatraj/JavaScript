//Problem 1: Print the Calendar dates
for (let m=1; m<=12; m++){
    if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
        for(let D=1 ; D<=31; D++){
            console.log(m + "-" + D);
        }
    }
    if(m==4 || m==6 || m==9 || m==11){
        for(let D=1 ; D<=30; D++){
            console.log(m + "-" + D);
        }  
    }
    if(m==2){
        for(let D=1 ; D<=28; D++){
            console.log(m + "-" + D);
        } 
    }
}




//Problem 2: Print Prime Numbers from 1 to given limit
let limit=100;
for(let i=2; i<=limit; i++){
  let sum=0;
    for(let j=2; j<i; j++){
        if(i%j === 0){
            sum+=j;
        }
    }
    if(sum===0){
        console.log(i);
    }
}




//Problem 3: Print a box patterns using *
for(let i = 1; i<=10; i++){
    let sum = ' ';
   for(j=1 ; j<=10; j++){
        if(i==1 || i==10 || j==1 || j==10){
            sum+='*';
        }
        else{
            sum+=" ";
        }    
    }
    console.log(sum);
}
     