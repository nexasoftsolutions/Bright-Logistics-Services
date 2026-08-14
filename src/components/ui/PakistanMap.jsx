'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// React-Leaflet uses [latitude, longitude]
const markers = [
  { name: 'Karachi', coordinates: [24.8607, 67.0011], isHQ: true },
  { name: 'Lahore', coordinates: [31.5204, 74.3587] },
  { name: 'Islamabad', coordinates: [33.6844, 73.0479] },
  { name: 'Rawalpindi', coordinates: [33.5973, 73.0405] },
  { name: 'Sahiwal', coordinates: [30.6682, 73.1040] },
  { name: 'Multan', coordinates: [30.1575, 71.4753] },
  { name: 'Kasur', coordinates: [31.1157, 74.4465] },
  { name: 'Abbottabad', coordinates: [34.1688, 73.2215] },
  { name: 'Nowshera', coordinates: [34.0158, 71.9754] },
  { name: 'Talagang', coordinates: [32.9297, 72.4138] },
];

export default function PakistanMap() {
  const createCustomIcon = (name, isHQ) => {
    return L.divIcon({
      className: 'custom-leaflet-icon bg-transparent border-none',
      html: `
        <div class="flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2" style="transform: translate(-50%, -50%);">
          <div class="relative flex items-center justify-center">
            ${isHQ ? '<div class="absolute w-5 h-5 bg-[#fd8b00] rounded-full animate-pulse opacity-60"></div>' : ''}
            <div class="${isHQ ? 'w-3 h-3 bg-[#fd8b00]' : 'w-2 h-2 bg-white'} rounded-full relative z-10 shadow-[0_0_8px_rgba(253,139,0,0.8)]"></div>
          </div>
          <div class="mt-1 ${isHQ ? 'text-white font-bold text-sm' : 'text-[#d5e3fd] text-[10px] font-medium'} whitespace-nowrap drop-shadow-md" style="font-family: system-ui, sans-serif;">
            ${name}${isHQ ? ' (HQ)' : ''}
          </div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
  };

  return (
    <div className="w-full h-[400px] md:h-full relative z-10 rounded-3xl overflow-hidden shadow-2xl">
      <MapContainer 
        center={[30.5, 70]} 
        zoom={5} 
        scrollWheelZoom={false}
        className="w-full h-full bg-primary"
        style={{ background: '#000613' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {markers.map(({ name, coordinates, isHQ }) => (
          <Marker 
            key={name} 
            position={coordinates}
            icon={createCustomIcon(name, isHQ)}
          />
        ))}
      </MapContainer>
    </div>
  );
}
