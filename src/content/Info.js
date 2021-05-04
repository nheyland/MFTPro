import React, { useEffect } from "react";
import LogbookData from "./info/LogbookData";
const Info = ({ logbook }) => {
  useEffect(() => {
    const logbook = localStorage.getItem("logbook")
      ? JSON.parse(localStorage.getItem("logbook"))
      : null;
    logbook && LogbookData.mostCommon(logbook);
  }, [logbook]);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Info;
