import { createSlice } from '@reduxjs/toolkit';

export const superHeroSlice = createSlice({
    name: 'superHero',
    initialState: {
        page: '',
        indice: 0,
        isLoading: true,
        superHero: [],
        superHeroByName: [],
    },
    reducers: {
        startLoading: ( state ) => {
             state.isLoading = true 
        },
        setSuperHero: ( state, {payload}) => {
            state.page = payload.page
            state.indice = payload.indice
            state.superHero = payload.superHero
            state.isLoading = false
        },
        setSuperHeroByName: ( state, {payload}) => {
            state.isLoading = false
            state.superHeroByName = payload.results
        }
    } 
})

export const { startLoading, setSuperHero, setSuperHeroByName } = superHeroSlice.actions