import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

// Custom component to update the map's center dynamically
const UpdateMapCenter = ({ latitude, longitude }) => {
  const map = useMap(); // Access the map instance
  useEffect(() => {
    if (latitude && longitude) {
      map.setView([latitude, longitude], map.getZoom()); // Update center and keep the current zoom level
    }
  }, [latitude, longitude, map]);
  return null;
};

const DynamicMap = ({ id }) => {
  const [location, setLocation] = useState(null); // Initialize as null

  const createCustomIcon = (iconColor) => {
    const iconHtml = renderToStaticMarkup(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          color: iconColor,
        }}
      >
        <IoLocationSharp />
      </div>
    );
  
    return L.divIcon({
      className: "custom-div-icon",
      html: iconHtml, // Rendered HTML string
      iconSize: [30, 30], // Adjust size as needed
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/location.json");
        const data = response.data;
        const foundLocation = data.find((loc) => loc.id == id);
        setLocation(foundLocation);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <MapContainer
      center={[51.505, -0.09]} // Default position before location is loaded
      zoom={24}
      style={{ height: "500px"}}
      className="border border-gray-300 rounded-2xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <span className="text-red-400">Estate Ease</span>'
      />
      {/* Dynamically update map center */}
      {location && location.latitude && location.longitude && (
        <>
          <UpdateMapCenter
            latitude={location.latitude}
            longitude={location.longitude}
          />
          <Marker
            icon={createCustomIcon("red")}
            position={[location.latitude, location.longitude]}
          >
            <Popup>
              <strong>{location.segment_name}</strong>
              <br />
              {location.location}
            </Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};

export default DynamicMap;
