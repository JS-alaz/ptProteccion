import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate()//ayuda con la navegacion

    const onLogout = () => {
        navigate('/login', {    //funciona como un  link
            replace: true   //se usa para que no se cree un historial de navegacion
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                SuperHeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/superheroes"
                    >
                        SuperHeroes
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`} 
                        to="/search"
                    >
                        Search 
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Welcome!
                    </span>

                    <button
                     className='nav-item nav-link btn btn-outline-info'
                     onClick={onLogout}
                     >
                        LogOut
                    </button>
                </ul>
            </div>
        </nav>
    )
}
