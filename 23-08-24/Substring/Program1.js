//
function subString(name){
    for(let i=0; i<name.length;i++){
        console.log('......');
        for (let j=i; j<name.length; j++){
            let bag =' ';
            for(let k=i; k<=j;k++){
                bag+=name[k];
            }
            console.log(bag) ;    
        }
           
        }
    }

subString('Masai');
