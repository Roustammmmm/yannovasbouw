import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !token || isMapInitialized) return;

    // Initialize map
    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [4.4699, 51.0259] as [number, number], // Explicitly type as tuple
      zoom: 10,
    });

    // Add markers for service areas
    const serviceAreas: Array<{ name: string; coordinates: [number, number] }> = [
      { name: 'Mechelen', coordinates: [4.4699, 51.0259] },
      { name: 'Keerbergen', coordinates: [4.6667, 51.0000] },
      { name: 'Putte', coordinates: [4.6333, 51.0333] },
      { name: 'Heist-op-den-Berg', coordinates: [4.7167, 51.0667] },
      { name: 'Bonheiden', coordinates: [4.5333, 51.0167] },
      { name: 'Haacht', coordinates: [4.6333, 50.9833] },
    ];

    serviceAreas.forEach(area => {
      new mapboxgl.Marker({ color: '#3B82F6' })
        .setLngLat(area.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${area.name}</h3>`))
        .addTo(map.current!);
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setIsMapInitialized(true);

    return () => {
      map.current?.remove();
    };
  }, [token, isMapInitialized]);

  if (!token) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="mb-2 text-sm text-gray-600">
          Voer uw Mapbox public token in om de kaart te zien. U kunt deze vinden op 
          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 ml-1">
            mapbox.com
          </a>
        </p>
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Voer uw Mapbox token in"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    );
  }

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};

export default Map;