import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLocation } from "../utils/LocationContext";
import deliveryAgentImage from "url:../assets/deliverymarkerimg.jpg";

// Fix for default icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const deliveryAgentIcon = new L.Icon({
  iconUrl: deliveryAgentImage,
  iconSize: [35, 35], // size of the icon
  iconAnchor: [17, 35], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -35], // point from which the popup should open relative to the iconAnchor
});

const LiveLocationTracker = () => {
  const { userLocation, trackingError } = useLocation();
  const [deliveryAgentLocation, setDeliveryAgentLocation] = useState(null);

  // Simulate delivery agent movement
  useEffect(() => {
    if (userLocation) {
      const interval = setInterval(() => {
        setDeliveryAgentLocation((prevLoc) => {
          if (!prevLoc) {
            // Start near the user, but offset
            return {
              latitude: userLocation.latitude + (Math.random() - 0.5) * 0.01,
              longitude: userLocation.longitude + (Math.random() - 0.5) * 0.01,
            };
          } else {
            // Simulate movement towards the user's location
            const newLat =
              prevLoc.latitude +
              (userLocation.latitude - prevLoc.latitude) * 0.01 +
              (Math.random() - 0.5) * 0.001;
            const newLng =
              prevLoc.longitude +
              (userLocation.longitude - prevLoc.longitude) * 0.01 +
              (Math.random() - 0.5) * 0.001;
            return { latitude: newLat, longitude: newLng };
          }
        });
      }, 2000); // Update every 2 seconds

      return () => clearInterval(interval);
    }
  }, [userLocation]);

  const position = userLocation
    ? [userLocation.latitude, userLocation.longitude]
    : [0, 0];
  const agentPosition = deliveryAgentLocation
    ? [deliveryAgentLocation.latitude, deliveryAgentLocation.longitude]
    : null;

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        Live Location Tracker
      </h2>
      {trackingError && <p className="text-red-600">Error: {trackingError}</p>}
      {!userLocation && (
        <p className="text-blue-700">Tracking your location...</p>
      )}

      {userLocation && (
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Your Location</Popup>
          </Marker>
          {agentPosition && (
            <Marker position={agentPosition} icon={deliveryAgentIcon}>
              <Popup>Kashaf</Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
};

export default LiveLocationTracker;
