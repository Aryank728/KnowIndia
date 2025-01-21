// src/App.js
import React, { useState } from 'react';
import { states, uts, India } from 'knowindia';
import './App.css';

function App() {
  const [selectedPlace, setSelectedPlace] = useState('');
  const [placeDetails, setPlaceDetails] = useState(null);

  const allStates = states();
  const allUTs = uts();
  const allPlaces = { ...allStates, ...allUTs };
  const placeNames = Object.values(allPlaces).map(place => place.name);

  const handlePlaceChange = (event) => {
    const placeName = event.target.value;
    setSelectedPlace(placeName);
    const placeCode = Object.keys(allPlaces).find(
      code => allPlaces[code].name === placeName
    );
    setPlaceDetails(allPlaces[placeCode]);
  };

  return (
    <div className="App">
      <h1 className="title">Explore India - States and Union Territories</h1>
      <div className="dropdown-container">
        <label htmlFor="place">Select a State/UT:</label>
        <select
          id="place"
          className="dropdown"
          value={selectedPlace}
          onChange={handlePlaceChange}
        >
          <option value="">--Select a Place--</option>
          {placeNames.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {placeDetails && (
        <div className="place-details">
          <h2>Details for {placeDetails.name}</h2>
          <p><strong>Capital:</strong> {placeDetails.capital}</p>
          <p><strong>Area:</strong> {placeDetails.area}</p>
          <p><strong>Population:</strong> {placeDetails.population}</p>
          <p><strong>Official Languages:</strong> {placeDetails.officialLanguages.join(', ')}</p>
          <p><strong>Literacy Rate:</strong> {placeDetails.literacyRate}</p>
          <p><strong>State Animal:</strong> {placeDetails.stateAnimal}</p>
          <p><strong>State Bird:</strong> {placeDetails.stateBird}</p>
          <p><strong>State Flower:</strong> {placeDetails.stateFlower}</p>
          <p><strong>State Tree:</strong> {placeDetails.stateTree}</p>
          <h3>Famous For</h3>
          <ul>
            {placeDetails.famousFor.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Festivals</h3>
          <ul>
            {placeDetails.festivals.map((festival, index) => (
              <li key={index}>{festival}</li>
            ))}
          </ul>
          <h3>Cuisine</h3>
          <ul>
            {placeDetails.cuisine.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </ul>
          <h3>Tourist Attractions</h3>
          <ul>
            {placeDetails.touristAttractions.map((attraction, index) => (
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
