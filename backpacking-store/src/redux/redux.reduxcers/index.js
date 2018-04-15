import {combineReducers} from "redux";
import app from "./appData";
import appUI from './appUI'

const rootReducer = combineReducers({
    app,
    appUI
})

export default rootReducer
