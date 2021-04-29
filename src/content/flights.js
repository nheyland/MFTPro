import React, { useState } from "react";
import { CSVReader } from "react-papaparse";
const Flights = () => {
  const [flights, setFlights] = useState();
  const [key, setKey] = useState();
  const fileRead = (file) => {
    const index = file.findIndex((x) => x.data[0] === "Flights Table");
    setKey(() => file[index + 1].data);
    let flights = [];
    console.log(file[index + 1].data);
    for (var i = index + 2; i < file.length; i++) {
      flights.push(file[i].data);
    }
    setFlights(flights);
  };
  return (
    <div>
      <CSVReader onFileLoad={(x) => fileRead(x)} />
      {flights && (
        <table>
          <tr>
            {key.map((val) => (
              <th
                key={val}
                onClick={() => {
                  console.log(val);
                }}
              >
                {val}
              </th>
            ))}
          </tr>
          {flights.map((flight) => (
            <tr>
              {flight.map((data) => (
                <td>{data}</td>
              ))}
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};

export default Flights;
