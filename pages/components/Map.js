import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_mapboxToken;

const Map = (props) => {
  const map = useRef(null);
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99, 39],
      zoom: 3,
    });
    if (props.pickupLatLong) {
      addToMap(map, props.pickupLatLong);
    }
    if (props.dropoffLatLong) {
      addToMap(map, props.dropoffLatLong);
    }

    if (props.pickupLatLong && props.dropoffLatLong) {
      map.current.fitBounds([props.pickupLatLong, props.dropoffLatLong], {
        padding: 60,
      });
    }
    return () => map.current.remove();
  }, [props.pickupLatLong, props.dropoffLatLong]);

  const addToMap = (map, coords) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coords).addTo(map.current);
  };

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  flex-1 h-1/2
`;

export default Map;
