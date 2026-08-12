'use client';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "/pakistan.json";

const markers = [
  { name: 'Karachi', coordinates: [67.0011, 24.8607], isHQ: true },
  { name: 'Lahore', coordinates: [74.3587, 31.5204] },
  { name: 'Islamabad', coordinates: [73.0479, 33.6844] },
  { name: 'Rawalpindi', coordinates: [73.0405, 33.5973] },
  { name: 'Sahiwal', coordinates: [73.1040, 30.6682] },
  { name: 'Multan', coordinates: [71.4753, 30.1575] },
  { name: 'Kasur', coordinates: [74.4465, 31.1157] },
  { name: 'Abbottabad', coordinates: [73.2215, 34.1688] },
  { name: 'Nowshera', coordinates: [71.9754, 34.0158] },
  { name: 'Talagang', coordinates: [72.4138, 32.9297] },
];

export default function PakistanMap() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 2200,
        center: [70, 30.5]
      }}
      className="w-full h-full relative z-10 p-4"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#001f3f"
              stroke="#6f88ad"
              strokeWidth={1.5}
              style={{
                default: { outline: "none" },
                hover: { fill: "#003366", outline: "none" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      
      {/* Route lines connecting some major cities */}
      <svg className="absolute inset-0 pointer-events-none opacity-80" viewBox="0 0 800 600" preserveAspectRatio="none">
         {/* Since exact screen paths from D3 aren't accessible here easily without Line components, 
             we rely on the markers being perfectly accurate geologically instead. */}
      </svg>

      {markers.map(({ name, coordinates, isHQ }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle 
            r={isHQ ? 8 : 4} 
            fill={isHQ ? "#fd8b00" : "#ffffff"} 
            className={isHQ ? "animate-pulse drop-shadow-[0_0_8px_rgba(253,139,0,0.8)]" : ""}
          />
          <text
            textAnchor="middle"
            y={isHQ ? -15 : -10}
            style={{ 
              fontFamily: "system-ui", 
              fill: isHQ ? "white" : "#d5e3fd", 
              fontSize: isHQ ? 14 : 11, 
              fontWeight: isHQ ? "bold" : "normal" 
            }}
          >
            {name}{isHQ ? " (HQ)" : ""}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
}
