import React from "react";

const Buttons = ({ datitos, botones }) => {
  return (
    <div className="filter--container">
      {botones.map((category, index) => {
        return (
          <buttons key={index} onClick={() => datitos(category)}>
            {category}
          </buttons>
        );
      })}
    </div>
  );
};

export default Buttons;
