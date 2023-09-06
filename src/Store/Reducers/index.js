import playerOneMarkReducer from "./playerOneMarkReducer.js";
import playAgainstReducer from "./playAgainstReducer.js";
import turnReducer from './turnReducer.js'
import boardReducer from './boardReducer.js';
import restartReducer from './restartReducer.js';
import scoreBoardReducer from './scoreBoardReducer.js';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playerOneMark: playerOneMarkReducer,
    playAgainst: playAgainstReducer,
    turn: turnReducer,
    board: boardReducer,
    restart: restartReducer,
    scores: scoreBoardReducer,
})

export default rootReducer;