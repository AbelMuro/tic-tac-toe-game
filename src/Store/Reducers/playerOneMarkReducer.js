export default function playerOneMarkReducer(mark = 'x', action) {
    switch(action.type){
        case 'UPDATE_MARK':
            return action.mark;
        default: 
            return mark;
    }
}