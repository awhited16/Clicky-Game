import React from "react";
import "./card.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Card = props => (
  <div className="card img-container hover card-column">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;