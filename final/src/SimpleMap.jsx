import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const SimpleMap = ({setlocation}) => {
    const mapRef = useRef(null);
    const latitude = 38.8951;
    const longitude = -77.0364;
    const [marker, setMarker] = useState({"lat":0,"lng":0});
    const ClickHandler = ({ setMarker }) => {
      useMapEvents({
        click(e) {
          const { lat, lng } = e.latlng;
          setMarker({ lat, lng });
          setlocation({ lat, lng })
        },
      });
      return null;
    };
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "70vh", width: "50vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ClickHandler setMarker={setMarker} />
          {/* Additional map layers or components can be added here */}
          {marker.lat && marker.lng && (
            <Marker position={[marker.lat, marker.lng]}>
              <Popup>The cat you saw was here.</Popup>
            </Marker>
          )}
        </MapContainer>
    );
  };
  
  export default SimpleMap;