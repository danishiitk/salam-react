import { useEffect, useState, useRef } from "react";

const useUserLocation = () => {
  
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const isSet = useRef(false);

  useEffect(() => {
    
    if (navigator.geolocation && !isSet.current) {
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          setLat(position.coords.latitude);
          
          setLong(position.coords.longitude);
          
          isSet.current = true;
        },
        (err) => {},
        { enableHighAccuracy: true }
      );
    }
  }, []);
  
  return { lat, long };
};

export default useUserLocation;
