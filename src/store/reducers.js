import {combineReducers} from "redux";
import heroSlice from "./slices/user/heroSlice";
import gameSlice from "./slices/game/gameSlice";

const rootReducer = combineReducers({
    hero: heroSlice,
    game: gameSlice
})


export default rootReducer