export default function scoreBoardReducer(score = {x: 0, o: 0, ties: 0}, action) {
    switch(action.type){
        case 'UPDATE_SCORE_X':
            return {x: score.x + 1, o: score.o, ties: score.ties};
        case 'UPDATE_SCORE_O':
            return {x: score.x, o: score.o + 1, ties: score.ties};
        case 'UPDATE_TIES':
            return {x: score.x, o: score.o, ties: score.ties + 1};
        case 'RESTART': 
            return 0;
        default: 
            return score;
    }
}