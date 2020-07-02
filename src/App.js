import React, { useState, useEffect } from 'react';
import './App.css';
import SelectTravelMode from "./SelectTravelMode.js"

function App() {
  const [transportMode, setTransportMode] = useState([])

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Meta/Modes`)
      .then(res => res.json())
      .then(data => setTransportMode(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p className="modeSelector">Mode selector:</p>
        <p> Transport for London Line information
        </p>
      </header>
      <SelectTravelMode transportMode={transportMode} />
    </div>
  );
}

export default App;
