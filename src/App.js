import "./App.css";
import Title from "./components/Title";
import Menu from "./components/Menu";
import data from "./data";
import { useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <>
      <Title />
      <Menu items={menuItems} />
    </>
  );
}

export default App;
