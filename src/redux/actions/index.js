const filterCountries = (value) => {
  return {
    type: 'FILTER_COUNTRIES',
    payload: value
  };
};

const setShowSearch = (value) => {
  return {
    type: 'SET_SHOW_SEARCH',
    payload: value
  };
};

export {filterCountries, setShowSearch};
