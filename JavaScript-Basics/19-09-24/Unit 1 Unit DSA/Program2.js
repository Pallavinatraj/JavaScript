
//String Power Calculator X
function powerOfString(str){
	let x=0;
	let y=0;
	for(let i=0; i<str.length; i++){
	    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            x++; 
	    }
	    else{
	        y++;      
	    }
	}
	console.log((7*x)+(2*y));
}
powerOfString('aman');

