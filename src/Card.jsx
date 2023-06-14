import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-title">{props.title}</div>
      <div className="card-desc">{props.description}</div>
      <div className="card-buttons">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <button className="primary">View Site</button>
      </a>
      <a href={props.srcUrl} target="_blank" rel="noopener noreferrer">
      <button className="secondary">Source Code</button>
      </a>
      </div>
    </div>
  );
};

export default Card;
