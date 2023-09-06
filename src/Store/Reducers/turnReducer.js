export default function turnReducer(turn = 'x', action){
    switch(action.type){
        case 'CHANGE_TURN':
            return turn === 'x' ? 'o' : 'x';
        case 'RESTART':
            return 'x';
        default:
            return turn;
    }
}