import { combineReducers } from 'redux';
import ScoreReducer from "./ScoreReducer";
import LoginDateReducer from './LoginDateReducer'

export default combineReducers({
    score: ScoreReducer,
    loginDate: LoginDateReducer
})