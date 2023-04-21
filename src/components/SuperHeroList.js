import { useDispatch, useSelector } from "react-redux";
import { SuperHeroCard } from "./SuperHeroCard";
import { useEffect } from "react";
import { getSuperHero } from "../store/slices/superHero/thunks";

export const SuperHeroList = () => {
    const dispatch = useDispatch()
    const {superHero, page, isLoading} = useSelector(state => state.superHero)
    
    useEffect(()=>{
        dispatch(getSuperHero())
    },[])

  return (
    <>
      <button
        disabled={ isLoading }
        className="btn btn-primary mb-3 mx-3"
        onClick={ () => dispatch( getSuperHero(- 1) ) }
      >
        Prev
      </button>
      <button
        disabled={ isLoading }
        className="btn btn-primary mb-3"
        onClick={ () => dispatch( getSuperHero(page) ) }
      >
        Next
      </button>

      <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {superHero.map((hero) => (
          <SuperHeroCard key={hero.id} hero={hero} />
        ))}
      </section>
    </>
  );
};
