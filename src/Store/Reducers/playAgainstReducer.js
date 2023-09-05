export default function playAgainstReducer(against = 'player', action){
    switch(action.type){
        case 'VERSUS_CPU':
            return action.against;
        case 'VERSUS_PLAYER':
            return action.against; 
        default: 
            return against;
    }
}