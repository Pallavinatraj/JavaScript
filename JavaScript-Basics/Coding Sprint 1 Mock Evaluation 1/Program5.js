//Apply Brakes
function applyBrakes(distance, time) {
    let speed = distance/time;
    if(speed>40){
        console.log('Apply brake');
    }
    else{
        console.log('Keep Going');
    }
}
applyBrakes(100,2);