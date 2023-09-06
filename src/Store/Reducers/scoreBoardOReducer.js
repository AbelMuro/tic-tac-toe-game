export default function scoreBoardOReducer(score = 0, action) {
    switch(action.type){
        case 'UPDATE_SCORE_O':
            return score + 1;
        case 'RESTART':
            return 0;
        default:
            return score;
    }   
}