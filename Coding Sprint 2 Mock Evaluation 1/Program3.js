//Mod of 6
function modOf6(num){
	let x = num%6;
	let range = ['zero','one','two','three','four','five'];
	if(x>=0 && x<=range.length){
	   console.log(range[x]);
	}
}
modOf6(7);
