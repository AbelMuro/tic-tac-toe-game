export default function tiesReducer(ties = 0, action){
    switch(action.type){
        case 'UPDATE_TIES':
            return ties + 1;
        case 'RESTART':
            return 0;
        default:
            return ties;
    }
}