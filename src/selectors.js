import { createSelector } from 'reselect';

// Location selectors
export const getSelectedCountry = (state) => state.state.location.selections.country;
export const getSelectedProvince = (state) => state.state.location.selections.province;
export const getSelectedCrag = (state) => state.state.location.selections.province;
export const getSelectedWall = (state) => state.state.location.selections.wall;
export const getSelectedClimb = (state) => state.state.location.selections.climb;

// Database selectors
export const getCountries = (state) => state.state.database.countries;
export const getProvinces = (state) => state.state.database.provinces;
export const getCrags = (state) => state.state.database.crags;
export const getWalls = (state) => state.state.database.walls;
export const getClimbs = (state) => state.state.database.climbs;

// Advanced database selectors (i.e. with filters)
export const getProvincesByCountry = createSelector(
  [getProvinces, getSelectedCountry],
  (provinces, selectedCountry) => provinces.filter((province) => province.country === selectedCountry)
);

export const getCragsByProvince = createSelector(
  [getCrags, getSelectedProvince],
  (crags, selectedProvince) => crags.filter((crag) => crag.province === selectedProvince)
);

export const getWallsByCrag = createSelector(
  [getWalls, getSelectedCrag],
  (walls, selectedCrag) => walls.filter((wall) => wall.crag === selectedCrag)
);

export const getClimbsByWall = createSelector(
  [getClimbs, getSelectedWall],
  (climbs, selectedWall) => climbs.filter((climb) => climb.wall === selectedWall)
);
