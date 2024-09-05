//
function capitalLettersInStringXIII(str) {
    let capital = 0;
	for (let char of str){
	    if(char===char.toUpperCase()){
	        capital++;
	    }
	}
    console.log(capital*13);
}
capitalLettersInStringXIII('raHuL');