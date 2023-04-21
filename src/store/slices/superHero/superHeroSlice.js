import { createSlice } from '@reduxjs/toolkit';

export const superHeroSlice = createSlice({
    name: 'superHero',
    initialState: {
        isLoading: true,
        superHero: [],
    },
    reducers: {
        startLoading: ( state ) => {
             state.isLoading = true 
        },
        setSuperHero: ( state, {payload}) => {
            state.superHero = payload.superHero
            state.isLoading = false
        }
    } 
})

export const { startLoading, setSuperHero } = superHeroSlice.actions