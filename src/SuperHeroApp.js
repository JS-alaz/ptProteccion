import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSuperHero } from "./store/slices/superHero/thunks"
import { SuperHeroCard } from "./components/SuperHeroCard"
import { Loading } from "./components/Loading"
import { SuperHeroList } from "./components/SuperHeroList"


export const SuperHeroApp = () => {

    return (
        <main className="container">
            <h1>SuperHeroApp</h1>
            <hr />

            <Loading />

            <SuperHeroList />

        </main>
  )
}
