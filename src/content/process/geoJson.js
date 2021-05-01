const geoJson = (logbook) => {
  console.log(logbook);
  let flights = [];
  let json = {
    type: "FeatureCollection",
    features: flights,
  };
  logbook.forEach((flight) => {
    if (typeof flight.Geo.dep.Data[0] !== "undefined") {
      let point = {
        type: "Feature",
        properties: {
          date: flight.Date,
        },
        geometry: {
          type: "Point",
          coordinates: [
            flight.Geo.dep.Data[0].coordinates.split(", ")[0],
            flight.Geo.dep.Data[0].coordinates.split(", ")[1],
          ],
        },
      };
      flights.push(point);
    }
  });
  logbook.forEach((flight) => {
    if (typeof flight.Geo.dest.Data[0] !== "undefined") {
      let point = {
        type: "Feature",
        properties: {
          date: flight.Date,
        },
        geometry: {
          type: "Point",
          coordinates: [
            flight.Geo.dest.Data[0].coordinates.split(", ")[0],
            flight.Geo.dest.Data[0].coordinates.split(", ")[1],
          ],
        },
      };
      flights.push(point);
    }
  });
  //   logbook.Geo.route.forEach((flight) => {
  //     if (typeof flight.Geo.dest.Data[0] !== "undefined") {
  //       let point = {
  //         type: "Feature",
  //         properties: {
  //           date: flight.Date,
  //         },
  //         geometry: {
  //           type: "Point",
  //           coordinates: [
  //             flight.Geo.dest.Data[0].coordinates.split(", ")[0],
  //             flight.Geo.dest.Data[0].coordinates.split(", ")[1],
  //           ],
  //         },
  //       };
  //       flights.push(point);
  //     }
  //   });
  console.log(json);
  return json;
};

export default geoJson;
