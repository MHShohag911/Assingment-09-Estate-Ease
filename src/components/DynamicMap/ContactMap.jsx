import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IoLocationSharp } from "react-icons/io5";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { useState } from "react";

const ContactMap = () => {
    const [position, setPosition] = useState({ lat: 23.74879, lng: 90.44660 });

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

  return (
    <MapContainer
      center={[position.lat, position.lng]} // Default position before location is loaded
      zoom={18}
      style={{ height: "500px"}}
      className="border border-gray-300 rounded-2xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <span className="text-red-400">Estate Ease</span>'
      />
        <>
          <Marker
            icon={createCustomIcon("red")}
            position={[position.lat, position.lng]}
          >
            <Popup>
              <strong>West Nandipara</strong>
              <br />
              Boro Bot Tola
            </Popup>
          </Marker>
        </>
    </MapContainer>
  );
};

export default ContactMap;
