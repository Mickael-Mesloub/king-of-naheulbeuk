import { createSlice, current } from '@reduxjs/toolkit';
import {personnages} from '../../../components/data/Characters.js'

export const enemiesSlice = createSlice({
    name: 'enemiesSlice',
    initialState: {
        enemies: {personnages}
    },

    reducers: {
        addEnemies: (state, action) => {
            return {
                ...state,
                name: action.payload
            }
        }
    }
})

export const {addEnemies} = enemiesSlice.actions
export default enemiesSlice.reducer