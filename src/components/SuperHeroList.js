import { useDispatch, useSelector } from "react-redux";
import { SuperHeroCard } from "./SuperHeroCard";
import { useEffect } from "react";
import { getSuperHero } from "../store/slices/superHero/thunks";

export const SuperHeroList = () => {
    const dispatch = useDispatch()
    const {superHero} = useSelector(state => state.superHero)
    
    useEffect(()=>{
        dispatch(getSuperHero())
    },[])

  return (
    // <section className="row rows-cols-1 row-cols-md-3 g-3 grid">
    <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {superHero.map((hero) => (
        <SuperHeroCard key={hero.id} hero={hero} />
      ))}
    </section>
  );
};
