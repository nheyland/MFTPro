import React from "react";
import Data from "./data/fake";
// import CORS from "./tools/CORS";
import WxBar from "./WxBar/WxBar";

const Wx = () => {
  // fetch(
  //   CORS(
  //     "https://www.aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=1&stationString=KSFM"
  //   )
  // )
  //   .then((str) => str.text())
  //   .then((res) => res.split("\n"))
  //   .then((arr) =>
  //     arr.map((x) => {
  //       return x.includes("<flight_category>") && console.log(x);
  //     })
  //   );

  const { airports } = Data;
  return (
    <div className="wx row">
      {airports.map((airport) => (
        <WxBar airport={airport} key={airport.key} />
      ))}
    </div>
  );
};

export default Wx;
