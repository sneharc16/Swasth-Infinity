import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom icon for the markers
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Sample data for states and fitness events
const stateData = [
  {
    id: 1,
    name: 'Maharashtra',
    coordinates: [19.7515, 75.7139],
    events: [
      { name: 'Yoga Camp', date: '2024-12-01' },
      { name: 'Marathon', date: '2024-12-05' },
    ],
  },
  {
    id: 2,
    name: 'Karnataka',
    coordinates: [15.3173, 75.7139],
    events: [{ name: 'Cycling Event', date: '2024-12-10' }],
  },
  {
    id: 3,
    name: 'Delhi',
    coordinates: [28.7041, 77.1025],
    events: [{ name: 'Zumba Workshop', date: '2024-12-15' }],
  },
];

const MapComponent = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Map Section */}
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        style={{ width: '70%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />

        {/* Add Markers for each state */}
        {stateData.map((state) => (
          <Marker
            key={state.id}
            position={state.coordinates}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                setSelectedState(state);
              },
            }}
          >
            <Popup>{state.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Details Section */}
      <div style={{ width: '30%', padding: '20px', overflowY: 'auto', borderLeft: '1px solid #ccc' }}>
        {selectedState ? (
          <div>
            <h3>{selectedState.name}</h3>
            <ul>
              {selectedState.events.map((event, index) => (
                <li key={index}>
                  <strong>{event.name}</strong> - {event.date}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Click on a state to see fitness events.</p>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
