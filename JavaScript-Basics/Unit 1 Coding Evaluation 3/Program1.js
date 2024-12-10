//Characters of a 1D Array
function characters1DArray(str){
	let mapping = {
	    '*': '0',
	    '-': '1',
	    '/': '2',
	};
	 let result = ' ';
	 for(let char of str){
	     result+=mapping[char];
	 }
	 console.log(result);
}
characters1DArray('*/-*/');