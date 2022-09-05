import { React, useState } from "react";
import Items from "./Items";
import Buttons from "./Buttons";
import data from "../data";

const botones = [
  "all",
  ...new Set(
    data.map((categorias) => {
      return categorias.category;
    })
  ),
];

const Menu = (props) => {
  const [datos, setDatos] = useState(data);
  const [categories, setCategories] = [botones];

  const filterItems = (categoria) => {
    if (categoria === "all") {
      setDatos(data);
      return;
    }
    const newItems = data.filter((item) => item.category === categoria);
    setDatos(newItems);
  };
  console.log(datos);
  return (
    <>
      <Buttons botones={categories} datitos={filterItems} />
      <section>
        <div className="flex--container">
          {datos.map((e) => {
            const { id, title, img, desc, price } = e;
            return (
              <div className="info--container">
                <div className="img--container">
                  <img src={img}></img>
                </div>
                <div className="text--container">
                  <div className="prices">
                    <p>{title}</p>
                    <span>${price}</span>
                  </div>
                  <div>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Menu;
