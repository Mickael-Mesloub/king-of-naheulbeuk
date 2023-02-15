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
                hero: action.payload // action.payload = la data qu'on envoie dans addHero avec le dispatch
            }
        }
    }
})

export const {addHero} = heroSlice.actions

export default heroSlice.reducer