import { createSlice } from '@reduxjs/toolkit';

export const superHeroSlice = createSlice({
    name: 'superHero',
    initialState: {
        page: 1,
        isLoading: true,
        superHero: [],
    },
    reducers: {
        startLoading: ( state ) => {
             state.isLoading = true 
        },
        setSuperHero: ( state, {payload}) => {
            state.page = payload.page
            state.superHero = payload.superHero
            state.isLoading = false
        }
    } 
})

export const { startLoading, setSuperHero } = superHeroSlice.actions