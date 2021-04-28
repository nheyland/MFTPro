import React, { useState } from "react";

import CORS from "./tools/CORS";

const Body = () => {
  const [data, setData] = useState();
  fetch(
    CORS(
      "https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=KDEN%20KSEA%20PHNL&hoursBeforeNow=1"
    )
  )
    .then((str) => str.text())
    .then((res) => console.log(res));
  return <h1>Hel</h1>;
};

export default Body;
