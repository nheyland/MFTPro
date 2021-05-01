import React, { useState } from "react";
import { CSVReader } from "react-papaparse";
import { fileRead } from "./process/engine";
import FadeIn from "../styles/fade";
import Map from "./process/map";

const Flights = () => {
  const [logbook, setLogbook] = useState();

  return (
    <>
      <FadeIn>
        <CSVReader
          visible={false}
          onFileLoad={(x) => fileRead(x).then((data) => setLogbook(data))}
          style={{
            dropArea: {
              marginTop: "2rem",
              borderColor: "#253031",
              borderRadius: 20,
            },
          }}
        >
          <h2 className="subheader">Drag and drop logbook csv here</h2>
        </CSVReader>
      </FadeIn>
      <FadeIn>
        <Map logbook={logbook} />
      </FadeIn>
    </>
  );
};

export default Flights;
