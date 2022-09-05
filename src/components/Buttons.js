import React from "react";

const Buttons = ({ datitos, botones }) => {
  return (
    <div className="filter--container">
      {botones.map((category, index) => {
        return (
          <button key={index} onClick={() => datitos(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
