'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrige un problème d'icône avec Leaflet dans React
const icon = L.icon({
  iconUrl: "/home-icon.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const position: [number, number] = [46.5057, -1.6033]; // Coordonnées de La Petite Forêt

const Map = () => {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <b>Gîte La Petite Forêt</b><br />
          85440 Grosbreuil
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map; 