import React from "react";
import "./card.css";

//stateless component
const Card = props => (
  <div className="card img-container hover card-column">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleCards(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;