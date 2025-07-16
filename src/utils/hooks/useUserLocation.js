import { useEffect, useState, useRef } from "react";

const useUserLocation = () => {
  
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isSet = useRef(false); // To prevent multiple calls within a single mount

  useEffect(() => {
    const storedLat = sessionStorage.getItem("userLat");
    const storedLong = sessionStorage.getItem("userLong");
    const storedError = sessionStorage.getItem("userLocationError");

    if (storedLat && storedLong) {
      setLat(storedLat);
      setLong(storedLong);
      setLoading(false);
      isSet.current = true; // Mark as set from storage
      return;
    }

    if (storedError) {
      setError(storedError);
      setLoading(false);
      isSet.current = true; // Mark as set from storage
      return;
    }

    if (navigator.geolocation && !isSet.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLat = position.coords.latitude;
          const newLong = position.coords.longitude;
          setLat(newLat);
          setLong(newLong);
          sessionStorage.setItem("userLat", newLat);
          sessionStorage.setItem("userLong", newLong);
          sessionStorage.removeItem("userLocationError"); // Clear any previous error
          isSet.current = true;
          setLoading(false);
        },
        (err) => {
          console.error("Error getting user location:", err);
          const errorMessage = err.message || "Geolocation error";
          setError(errorMessage);
          sessionStorage.setItem("userLocationError", errorMessage); // Store error
          sessionStorage.removeItem("userLat"); // Clear any partial location
          sessionStorage.removeItem("userLong");
          isSet.current = true; // Prevent further attempts after failure
          setLoading(false);
        },
        { timeout: 30000, maximumAge: 0 }
      );
    } else {
      // If geolocation is not supported or already set/error handled
      setLoading(false);
      if (!navigator.geolocation && !storedError) {
        const noGeoError = "Geolocation is not supported by your browser.";
        setError(noGeoError);
        sessionStorage.setItem("userLocationError", noGeoError);
      }
    }
  }, []); // Empty dependency array means this runs once on mount
  
  return { lat, long, loading, error };
};

export default useUserLocation;
