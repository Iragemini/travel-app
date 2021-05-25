import dataCountries from '../../JSON/dataCountries.json';

const initialState = {
  countries: dataCountries,
  showSearch: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_COUNTRIES':
      const value = action.payload.value.toLowerCase();
      const code = action.payload.language.slice(0, 2);

      if (value.length === 0) return {...state, countries: dataCountries};

      const newCountries = dataCountries.filter((elem) => {
        return (
          elem.name[code].toLowerCase().startsWith(value) ||
          elem.capital[code].toLowerCase().startsWith(value)
        );
      });

      return {...state, countries: newCountries};
    case 'SET_SHOW_SEARCH':
      return {...state, showSearch: action.payload};
    default:
      return state;
  }
};

export default reducer;
