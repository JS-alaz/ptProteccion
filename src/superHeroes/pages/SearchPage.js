import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from "query-string"
import { useDispatch, useSelector } from "react-redux"
import { getSuperHeroByName } from "../../store/slices/superHero/thunks"
import { SuperHeroCard } from "../components/SuperHeroCard"


export const SearchPage = () => {
  const dispatch = useDispatch()
  const {superHeroByName} = useSelector(state => state.superHero)

  
  /* crear un custom hook para buscar */
  const navigate = useNavigate()
  const location = useLocation()
  
  const {q} = queryString.parse(location.search)
  
  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const showError = (superHeroByName === undefined) && (q !== '')
  const showSearch = (q === undefined || q.length === 0)
  
  const onSearchSubmit = (event) => {
    event.preventDefault()
    if(searchText === undefined || searchText.trim().length <=1)return

    navigate(`?q=${searchText}`)
    dispatch(getSuperHeroByName(searchText))
  }

  return (
    <>
      <div className="row">
        <h1>Buscar</h1>
        <hr />
        <section className="col-sm-5 col-12 ">
          <form 
            onSubmit={onSearchSubmit}
            >
            <input 
              type="text"
              placeholder="Nombre, iniciales..., del super heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
              />
            <button className="btn btn-primary mt-1">
              Buscar
            </button>
          </form>
        </section>
        <div className="col-sm-7 col-12">
          <h4>Resultados</h4>
          <hr />
          
          <div className="alert alert-primary"
            style={{display: showSearch ? '' : 'none'}}
          >
            Busca un super heroe
          </div>
          <div className="alert alert-danger"
            style={{display:showError ? '' : 'none'}}
          >
            No se encontro un super heroe con nombre parecido a: <b>{q}</b>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
          {
            superHeroByName?.map(sp => (
              <SuperHeroCard key={sp.id} hero={sp}/>
              ))
            }
          </div>

        </div>
      </div>
    </>
  )
}
