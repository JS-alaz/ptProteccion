import { setSuperHero, startLoading } from "./superHeroSlice"


export const getSuperHero = () => {
    return async (dispatch) => {

        dispatch(startLoading())

        const superHero = []
        for (let i = 1; i <= 20; i++) {
            const resp = await fetch(`https://www.superheroapi.com/api.php/112776435127359/${i}`)
            const data = await resp.json()
            superHero.push(data)
        }
        
        dispatch(setSuperHero({superHero}))    

    }
}