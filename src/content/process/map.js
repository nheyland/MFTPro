import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import geoJson from "./geoJson";

const token =
  "pk.eyJ1IjoibmhleWxhbmQiLCJhIjoiY2tvNHN0NGM1MGQ0ZTJwcW5jM3oxZGExbCJ9.P2PLsqMHXO06rGRQkfKlEA";
mapboxgl.accessToken = token;

const Map = ({ logbook }) => {
  const mapContainer = useRef();
  let data = null;
  if (logbook) {
    localStorage.setItem("logbook", JSON.stringify(logbook));
    localStorage.setItem("geoJson", JSON.stringify(geoJson(logbook)));
  }
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nheyland/cklx3z8vw5yt717lk0rui6ntl",
      center: [-98.5795, 39.8283],
      zoom: 3,
    });
    map.on("load", () => {
      map.addSource("airports", {
        type: "geojson",
        data: JSON.parse(localStorage.getItem("geoJson")),
      });
      map.addLayer({
        id: "airportsRoute",
        type: "line",
        source: "airports",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ae34eb",
          "line-width": 2,
        },
      });
      map.addLayer({
        id: "airports",
        type: "circle",
        source: "airports",
        paint: {
          "circle-radius": 4,
          "circle-color": "#4f34eb",
        },
        filter: ["==", "$type", "Point"],
      });
    });
    return () => map.remove();
  }, [data, logbook]);
  return (
    <div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
};

export default Map;
