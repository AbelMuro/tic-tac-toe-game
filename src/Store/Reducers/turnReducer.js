export default function turnReducer(turn = 'x', action){
    switch(action.type){
        case 'SWITCH_TURN':
            return turn === 'x' ? 'o' : 'x';
        default:
            return turn;
    }
}