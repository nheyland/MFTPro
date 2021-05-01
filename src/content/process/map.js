import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";
import geoJson from "./geoJson";

const token =
  "pk.eyJ1IjoibmhleWxhbmQiLCJhIjoiY2tvNHN0NGM1MGQ0ZTJwcW5jM3oxZGExbCJ9.P2PLsqMHXO06rGRQkfKlEA";

mapboxgl.accessToken = token;

const Map = ({ logbook }) => {
  const mapContainer = useRef();

  let data = null;
  if (logbook) data = geoJson(logbook);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nheyland/cklx3z8vw5yt717lk0rui6ntl",
      center: [-98.5795, 39.8283],
      zoom: 3,
    });
    logbook &&
      map.on("load", () => {
        map.addSource("airports", {
          type: "geojson",
          data: data,
        });

        map.addLayer({
          id: "airports",
          type: "circle",
          source: "airports",
          paint: {
            "circle-radius": 6,
            "circle-color": "#B42222",
          },
          filter: ["==", "$type", "Point"],
        });
      });
    return () => map.remove();
  }, [logbook, data]);
  return (
    <div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
