import { useEffect } from 'react';
import './Card.css';

function Card(props) {

  return (
    <div className="tarjeta" key={props.id}>
      <div className="tarjeta__imagen">
        <img
          className="tarjeta__imagen-background"
          src={props.background}
          alt={props.name}
        />
        <img
          className="tarjeta__imagen-icono"
          src={props.icon}
          alt={props.name}
        />
      </div>
      <div className="tarjeta__parrafo">
        <h3 className="tarjeta__titulo">{props.name}</h3>
        <p className="tarejta__texto">Total Quizzes: {props.totalQuizzes}</p>
        <p className="tarejta__texto">User: {props.users}</p>
        <a
          href="https://larnu.app/"
          target="_blank"
          className="btn btn-primary" rel="noreferrer"
          >Go to Larnu</a>
      </div>
    </div>
  );
}

export default Card;
