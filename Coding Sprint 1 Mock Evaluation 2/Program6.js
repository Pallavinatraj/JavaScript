//World Cup Final

function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
    if(NzScore>EngFours){
        console.log('New Zealand');
    }
    else if(NzScore<EngFours){
        console.log('England');
    }
    else if(NzSuprOver>EngSuperOver){
        console.log('New Zealand');
    }
    else if(NzSuprOver<EngSuperOver){
        console.log('England');
    }
    else if(NzFours>EngFours){
        console.log('New Zealand');
    }
    else if(NzFours>EngFours){
        console.log('England');
    }
}
worldCupFinal(241, 15 ,21, 241,15, 26);
