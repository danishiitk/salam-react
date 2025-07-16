import { useEffect, useState, useRef } from "react";

const useUserLocation = () => {
  console.log("[useUserLocation] Hook initialized");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const isSet = useRef(false);

  useEffect(() => {
    console.log("[useUserLocation] useEffect triggered");
    if (navigator.geolocation && !isSet.current) {
      console.log("[useUserLocation] Requesting geolocation...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("[useUserLocation] Got position:", position.coords);
          setLat(position.coords.latitude);
          console.log("[useUserLocation} set lat");
          setLong(position.coords.longitude);
          console.log("[useUserLocation} setlong");
          isSet.current = true;
        },
        (err) => {},
        { enableHighAccuracy: true }
      );
    }
  }, []);
  console.log("[useUserLocation] before return", { lat, long });
  return { lat, long };
};

export default useUserLocation;
