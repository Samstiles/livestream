import React from 'react';
import { connect } from 'react-redux';
import {
  getCountries,
  getProvincesByCountry,
  getCragsByProvince,
  getWallsByCrag,
  getClimbsByWall
} from './selectors';

const mapStateToprops = (state) => {
  return {
    countries: getCountries(state),
    provinces: getProvincesByCountry(state),
    crags: getCragsByProvince(state),
    walls: getWallsByCrag(state),
    climbs: getClimbsByWall(state)
  };
};

var onClick = function () {
  console.log(arguments);
  console.log('Clicked province!');
};

const AppComponent = ({ countries, provinces, crags, walls, climbs }) => (
  <div className="intro">
    <h1>Sup!</h1>

    <h2>Countries</h2>
    <ul>
      {countries.map((country) => {
        return (<li key={country.id}>{country.name}</li>);
      })}
    </ul>

    <h2>Provinces</h2>
    <ul>
      {provinces.map((province) => {
        return (<li onClick={onClick} key={province.id}>{province.name}</li>);
      })}
    </ul>

    <h2>Crags</h2>
    <ul>
      {crags.map((crag) => {
        return (<li key={crag.id}>{crag.name}</li>);
      })}
    </ul>

    <h2>Walls</h2>
    <ul>
      {walls.map((wall) => {
        return (<li key={wall.id}>{wall.name}</li>);
      })}
    </ul>

    <h2>Climbs</h2>
    <ul>
      {climbs.map((climb) => {
        return (<li key={climb.id}>{climb.name}</li>);
      })}
    </ul>

  </div>
);

const App = connect(mapStateToprops)(AppComponent);

export default App;
