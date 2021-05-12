import React from 'react';
import Fade from 'react-reveal/Fade';

import './styles.css'

export default function Card(props) {
  const img = require(`../../images/${props.img}`).default;
  return (
    <Fade>
      <div className="card animate__fadeInUp">
        <img src={img} alt={props.imgAlt} width="100%" height="100%" />
        <h3 className="card-title txt-red">
          {props.title}
        </h3>
        <p className="card-desc">
          {props.description}
        </p>
        <button className="btn">{props.buttonText}</button>
      </div>
    </Fade>
  )
}