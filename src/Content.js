import React, { useState } from "react";
import Flights from "./content/flights";
import Info from "./content/Info";
import Map from "./content/process/Map";

const Content = () => {
  const [logbook, setLogbook] = useState();
  return (
    <div>
      <Flights setLogbook={setLogbook} />
      <Map logbook={logbook} />
      <Info logbook={logbook} />
    </div>
  );
};

export default Content;
