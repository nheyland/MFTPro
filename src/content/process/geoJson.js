const geoJson = (logbook) => {
  let flights = [];
  let json = {
    type: "FeatureCollection",
    features: flights,
  };
  // POINT
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
    if (typeof flight.Geo.route === "object") {
      flight.Geo.route.forEach((loc) => {
        if (loc.Data.length > 0) {
          let point = {
            type: "Feature",
            properties: {
              date: flight.Date,
            },
            geometry: {
              type: "Point",
              coordinates: [
                loc.Data[0].coordinates.split(", ")[0],
                loc.Data[0].coordinates.split(", ")[1],
              ],
            },
          };
          flights.push(point);
        }
      });
    }
  });
  // SHORT ROUTE
  logbook.forEach((flight) => {
    let route = [];
    flight.Geo.dep.Data[0] &&
      route.push([
        flight.Geo.dep.Data[0].coordinates.split(", ")[0],
        flight.Geo.dep.Data[0].coordinates.split(", ")[1],
      ]);
    flight.Geo.dest.Data[0] &&
      route.push([
        flight.Geo.dest.Data[0].coordinates.split(", ")[0],
        flight.Geo.dest.Data[0].coordinates.split(", ")[1],
      ]);
    flight.Geo.route &&
      flight.Geo.route.forEach((loc) => {
        loc.Data[0] &&
          route.push([
            loc.Data[0].coordinates.split(", ")[0],
            loc.Data[0].coordinates.split(", ")[1],
          ]);
      });
    let path = {
      type: "Feature",
      properties: {
        date: flight.Date,
      },
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };
    flights.push(path);
  });
  return json;
};

export default geoJson;
