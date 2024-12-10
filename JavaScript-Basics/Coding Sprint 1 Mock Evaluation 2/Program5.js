//Enough Fuel Consumption
function enoughFuelConsumption(fuel, distance) {
    let required = fuel*distance;
    if(required>50){
        console.log('Enough');
    }
    else{
        console.log('Go On');
    }
}
enoughFuelConsumption(1,46);