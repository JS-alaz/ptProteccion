import { Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui/components/NavBar"

import { SearchPage, SuperHeroesPage } from "../pages"



export const SuperHeroesRoutes = () => {
  return (
    <>
        <NavBar />

        <div className="container mt-5">
            <Routes>
                <Route path="superheroes" element={<SuperHeroesPage />} />
                <Route path="search" element={<SearchPage />} />
            </Routes>
        </div>
    </>
  )
}
