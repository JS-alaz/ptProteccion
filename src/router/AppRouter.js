import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { SuperHeroesRoutes } from "../superHeroes/routes/SuperHeroesRoutes"

export const AppRouter = () => {
    
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<SuperHeroesRoutes />} />

            <Route path="/" element={<Navigate to={'superheroes'} />} />
        </Routes>
    </>
  )
}
