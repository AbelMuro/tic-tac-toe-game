import playerOneMarkReducer from "./playerOneMarkReducer.js";
import playAgainstReducer from "./playAgainstReducer.js";
import turnReducer from './turnReducer.js'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    playerOneMark : playerOneMarkReducer,
    playAgainst: playAgainstReducer,
    turn: turnReducer
})

export default rootReducer;