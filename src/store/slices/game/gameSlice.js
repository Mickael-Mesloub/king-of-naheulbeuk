import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: {
        heroes: []
    },

    reducers: {
        addAllHeroes: (state, action) => {
            return {
                ...state,
                heroes: action.payload
            }
        }
    }
})

export const {addAllHeroes} = gameSlice.actions

export default gameSlice.reducer