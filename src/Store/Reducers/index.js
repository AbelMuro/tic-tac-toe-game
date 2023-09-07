import menuOptionsReducer from './menuOptionsReducer.js';
import turnReducer from './turnReducer.js'
import boardReducer from './boardReducer.js';
import scoreBoardReducer from './scoreBoardReducer.js';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    menuOptions: menuOptionsReducer,
    turn: turnReducer,
    board: boardReducer,
    scores: scoreBoardReducer,
})

export default rootReducer;