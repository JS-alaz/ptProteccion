import { setSuperHero, startLoading } from "./superHeroSlice"


export const getSuperHero = (page=1) => {
    return async (dispatch) => {

        dispatch(startLoading())
        
        const superHero = []
        for (let i = page>1 ? page = (page+11): page; i <= page+11; i++) {
            const resp = await fetch(`https://www.superheroapi.com/api.php/112776435127359/${i}`)
            const data = await resp.json()
            superHero.push(data)
        }
        console.log('page ', page)
        dispatch(setSuperHero({superHero, page: page + 1}))    

    }
}