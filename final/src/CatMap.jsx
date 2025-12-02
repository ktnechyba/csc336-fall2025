import React, { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { popup } from "leaflet";
const CatMap = ({data}) => {
    const mapRef = useRef(null);
    const latitude = 38.8951;
    const longitude = -77.0364;
    const [markers, setMarkers] = useState([]);

    useEffect(()=> {
      const marker_data = data.cats.map((cat)=> ({
        "lng": cat.lng,
        "lat": cat.lat,
        "popupText": cat.color
      }))

      setMarkers(marker_data)
    }, []);
  
    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "70vh", width: "50vw"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((marker)=> (
            <Marker position={[marker.lat, marker.lng]}>
              <Popup>{marker.popupText}</Popup>
            </Marker>
          ))}
            

        </MapContainer>
    );
  };
  
  export default CatMap;