import React from "react";

const Items = (props) => {
  return (
    <div className="info--container">
      <div className="img--container">
        <img src={props.img}></img>
      </div>
      <div className="text--container">
        <div className="prices">
          <p>{props.title}</p>
          <span>${props.price}</span>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
