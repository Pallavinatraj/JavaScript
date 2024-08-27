//
function vowelAndConsonantCount(N, str) {
    let sum =0;
    for (let i=0; i<N;i++){
        
        if(str[i].includes('a'||'e'||'i'||'o'||'u')){
          sum+=i;
      }
    }
    console.log(sum);
}
vowelAndConsonantCount(7, 'pallavi');