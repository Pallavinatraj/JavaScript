//Your first nested loop
function yourFirstNested(num) {
    for(let i=0; i<num; i++){
        let sum = ' ';
        for(let j=1; j<=num; j++){
            sum+= j+ ' ';
        }
      console.log(sum) ;
    }   
}
yourFirstNested(4);



//Your First Pattern
function yourFirstPattern(n) {
    for(let i=0; i<n; i++){
        let sum = ' ';
        for(let j=1; j<=n; j++){
            sum+= '*'+ ' ';
        }
      console.log(sum) ;
    } 
}
yourFirstPattern(6);



//Another Nested Loop
function anotherNested(num) {
        for(let i=0; i<=num; i++){
            for(let j=1; j<=i; j++){
                console.log(j);
            }
        }
    }
anotherNested(4) ;  



//Even Sum Again
function evenSumAgain(num) {
    for(let i=0; i<=num; i++){
        let sum =0;
        for(let j=1; j<=i; j++){
            if(j%2==0){
                sum+=j;
            }   
        }
        console.log(sum);
    }
}
evenSumAgain(4);



//Pattern Printing
function patternPrinting(N) {
    for(let i=0; i<=N; i++){
        let sum = ' ';
        for(let j=1; j<=i; j++){
            sum+= '*'+ ' ';
        }
      console.log(sum) ;
    } 
}
patternPrinting(4);



//Pattern of N
function patternOfN(N) {
    let number = 1;
    for(let i=0; i<N; i++){
        sum = ' ';
        for(let j=1; j<=N; j++){
           sum+=number + ' ';
           number++;
        }
        console.log(sum);
    }
}
patternOfN(3);



