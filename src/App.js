import React, { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import Wx from "./Wx";

import "./styles/general.scss";
import Content from './Content';

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="App">
      <Title menu={menu} setMenu={setMenu} />
      <Wx />
      <Menu menu={menu} setMenu={setMenu} />
      <Content />
    </div>
  );
}

export default App;
