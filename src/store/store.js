import { configureStore } from "@reduxjs/toolkit";
import { superHeroSlice } from "./slices/superHero/superHeroSlice";

export const store = configureStore({
    reducer: {
        superHero: superHeroSlice.reducer
    }
})