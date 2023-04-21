import { useState } from "react";

export const SuperHeroCard = ({ hero }) => {
  const { name, appearance, image } = hero;
  const {gender, race, 'eye-color': eyeColor, 'hair-color': hairColor, height, weight } = appearance

  const [showBackCard, setShowBackCard] = useState(true)
  
  const onClickCard = () => {
    setShowBackCard(!showBackCard)
  }

  return (
    <div className="col mb-2" onClick={onClickCard}>
      <div className="card">
        <div className="row">
          <div className="col-12">
            <img
              src={image.url}
              className="card-img test" 
              alt={`Photo superhero ${name}`}
              style={{
                display: !showBackCard ?'none' : 'block'
              }}
            />
          </div>

          <div className="col-12">
            <div className="card-body"
              style={{
                display: showBackCard ?'none' : 'block'
              }}
            >
              <h5 className="card-title">{name}</h5>
              <ul className="list-group text-center ">
                <small>
                  <li className="list-group-item disabled bg-secondary text-white h6 rounded" aria-disabled="true"><strong>Apariencia</strong></li>
                  <li className="list-group-item">Género: <small className="text-primary">{gender}</small></li>
                  <li className="list-group-item">Raza: <small className="text-primary">{race}</small></li>
                  <li className="list-group-item">Color ojos: <small className="text-primary"> {eyeColor} </small></li>
                  <li className="list-group-item">Color pelo: <small className="text-primary"> {hairColor} </small></li>
                  <li className="list-group-item">Peso: {weight.map(w=>(<small key={w} className="text-primary">{w=='- lb' ?'Estamos en eso...':w} </small>))}</li>
                  <li className="list-group-item">Altura: {height.map(h=>(<small key={h} className="text-primary">{h=='0 cm'?'Es peligroso, no se deja medir!':h} </small>))}</li>
                </small>
              </ul>
              
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
};
