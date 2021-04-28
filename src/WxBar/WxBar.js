import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const WxBar = ({ airport }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2 onClick={() => (show ? setShow(false) : setShow(true))}>
        {airport.id}
      </h2>
      <GoPrimitiveDot size={18} color={airport.cat} />
      {show && <h2>{airport.raw}</h2>}
      <div className="spacer"></div>
    </>
  );
};
export default WxBar;
