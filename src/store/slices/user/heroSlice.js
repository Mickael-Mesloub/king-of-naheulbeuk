import {createSlice} from '@reduxjs/toolkit'
import {personnages} from '../../../components/data/Characters.js'

export const heroSlice = createSlice({
    name: 'heroSlice',
    initialState: {
        hero: personnages[3]
    },
    
    reducers: {
        addHero: (state, action) => {
            return {
                ...state,
                hero: action.payload
            }
        }
    }
})

export const {addHero} = heroSlice.actions

export default heroSlice.reducer