import {combineReducers} from "redux";
import heroSlice from "./slices/user/heroSlice";

const rootReducer = combineReducers({
    hero: heroSlice
})


export default rootReducer