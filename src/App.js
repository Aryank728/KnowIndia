// src/App.js
import React, { useState } from 'react';
import { states } from 'knowindia';
import './App.css';

function App() {
  const [selectedState, setSelectedState] = useState('');
  const [stateDetails, setStateDetails] = useState(null);

  const allStates = states();
  const stateNames = Object.values(allStates).map(state => state.name);

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    const stateCode = Object.keys(allStates).find(
      code => allStates[code].name === stateName
    );
    setStateDetails(allStates[stateCode]);
  };

  return (
    <div className="App">
      <h1>Know India - React Demo</h1>
      <div>
        <label htmlFor="state">Select State:</label>
        <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="">--Select a State--</option>
          {stateNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {stateDetails && (
        <div>
          <h2>Details for {stateDetails.name}</h2>
          <p><strong>Capital:</strong> {stateDetails.capital}</p>
          <p><strong>Area:</strong> {stateDetails.area}</p>
          <p><strong>Population:</strong> {stateDetails.population}</p>
          <p><strong>Official Languages:</strong> {stateDetails.officialLanguages.join(', ')}</p>
          <p><strong>Literacy Rate:</strong> {stateDetails.literacyRate}</p>
          <p><strong>State Animal:</strong> {stateDetails.stateAnimal}</p>
          <p><strong>State Bird:</strong> {stateDetails.stateBird}</p>
          <p><strong>State Flower:</strong> {stateDetails.stateFlower}</p>
          <p><strong>State Tree:</strong> {stateDetails.stateTree}</p>
          <h3>Famous For</h3>
          <ul>
            {stateDetails.famousFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Festivals</h3>
          <ul>
            {stateDetails.festivals.map((festival, index) => (
              <li key={index}>{festival}</li>
            ))}
          </ul>
          <h3>Cuisine</h3>
          <ul>
            {stateDetails.cuisine.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
          <h3>Tourist Attractions</h3>
          <ul>
            {stateDetails.touristAttractions.map((attraction, index) => (
              <li key={index}>
                {attraction.name} ({attraction.type})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;