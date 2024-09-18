//House Making
function rangeOfTwo(N,K) {
    let brick = N*K;
    if(brick>=1000 && brick%5===0){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
  }
  rangeOfTwo(250,4);
  