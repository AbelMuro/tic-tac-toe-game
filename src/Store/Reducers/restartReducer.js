export default function restartReducer(restart = false, action) {
    switch(action.type){
        case 'RESTART':
            return true;
        case 'RESET':
            return false;
        default:
            return restart;
    }
}