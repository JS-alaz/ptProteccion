import { setSuperHero, startLoading } from "./superHeroSlice";

export const getSuperHero = (page, indice = 1) => {
  return async (dispatch) => {
    dispatch(startLoading());

    if (page === "next") {
      indice += 10;
    }
    if (page === "prev") {
      indice -= 10;
      if (indice <= 1) {
        indice = 1;
      }
    }
    const superHero = [];
    for (let i = indice; i <= indice + 10; i++) {
      const resp = await fetch(
        `https://www.superheroapi.com/api.php/112776435127359/${i}`
      );
      const data = await resp.json();
      superHero.push(data);
    }
    
    dispatch(setSuperHero({ superHero, page, indice }));
  };
};
