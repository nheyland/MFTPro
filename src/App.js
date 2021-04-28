import React from "react";
import Title from "./Title";
import Menu from "./Menu";
import Wx from "./Wx";

import "./styles/general.scss";

function App() {
  return (
    <div className="App">
      <Title />
      <Wx />
      <Menu />
    </div>
  );
}

export default App;
